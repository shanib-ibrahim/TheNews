import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { MobileNav } from "./common/MobileNav";
import Nav from "./common/Nav";
import { useEffect, useState } from "react";

const Header = ({ header }: { header: boolean }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 220) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };
    handScroll();
    window.addEventListener("scroll", handScroll);
    return () => window.removeEventListener("scroll", handScroll);
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

  return (
    <header
      className={`${
        header ? "py-7 bg-[#fff] shadow-lg " : "py-6 "
      } sticky top-0 z-30 transition-all`}
    >
      <div className="container mx-auto ">
        <div className="flex item-center justify-between xl:flex-col lg:gap-y-2">
          <Link to="/#home">
            <img src={logo} alt="Logo" height={120} width={120} />
          </Link>

          <Nav
            containerStyles="hidden xl:flex  gap-x-8 item-center lg:self-center"
            linkStyles="relative hover:text-primary transition-all"
            activeSection={activeSection}
          />

          <div className={`flex items-center gap-x-2 xl:hidden  `}>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
