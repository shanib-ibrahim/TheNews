import logo from "../assets/logo.png";
import { MobileNav } from "./common/MobileNav";
import Nav from "./common/Nav";

const Header = ({ header }: { header: boolean }) => {
  return (
    <header
      className={`${
        header ? "py-7 bg-[#fff] shadow-lg " : "py-6 "
      } sticky top-0 z-30 transition-all`}
    >
      <div className="container mx-auto ">
        <div className="flex item-center justify-between lg:flex-col lg:gap-y-2">
          <img src={logo} alt="Logo" height={120} width={120} />

          <Nav
            containerStyles="hidden xl:flex lg:flex  gap-x-8 item-center lg:self-center"
            linkStyles="relative hover:text-primary transition-all"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />

          <div className={`flex items-center gap-x-2 xl:hidden lg:hidden `}>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
