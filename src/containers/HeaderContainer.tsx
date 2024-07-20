import { useEffect, useState } from "react";
import Header from "../components/Header.tsx";
import { useAppSelector } from "../redux/hooks.ts";
import HeaderShimmer from "../components/ui/shimmer-ui/HeaderShimmer.tsx";
import { useLocation } from "react-router-dom";

const HeaderContainer = () => {
  const location = useLocation();
  const [header, setHeader] = useState(false);
  const loading = useAppSelector((state) => state.article.loading);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;

        if (window.scrollY >= sectionTop - 300) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
      setHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const offset = 150; // Adjust this value as per your layout
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return loading ? (
    <HeaderShimmer />
  ) : (
    <Header header={header} activeSection={activeSection} />
  );
};

export default HeaderContainer;
