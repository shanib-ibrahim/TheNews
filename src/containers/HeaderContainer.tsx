import { useEffect, useState } from "react";
import Header from "../components/Header.tsx";
import { useAppSelector } from "../redux/hooks.ts";
import HeaderShimmer from "../components/ui/shimmer-ui/HeaderShimmer.tsx";

const HeaderContainer = () => {
  const [header, setHeader] = useState(false);
  const loading = useAppSelector((state) => state.article.loading);
  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener("scroll", scrollYPos);
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return loading ? <HeaderShimmer /> : <Header header={header} />;
};

export default HeaderContainer;
