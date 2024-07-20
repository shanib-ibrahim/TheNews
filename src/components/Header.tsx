import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MobileNav } from "./common/MobileNav";
import Nav from "./common/Nav";

const Header = ({
  header,
  activeSection,
}: {
  header: boolean;
  activeSection: string;
}) => {
  return (
    <header
      className={` px-[1rem] ${
        header ? "py-7 bg-[#fff] shadow-lg " : "py-6"
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
            <MobileNav activeSection={activeSection} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
