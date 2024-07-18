import logo from "../../../assets/logo.png";
import { MobileNav } from "../../common/MobileNav";

const HeaderShimmer = () => {
  return (
    <header className="py-6 sticky top-0 z-30 transition-all">
      <div className="container mx-auto">
        <div className="flex item-center justify-between md:flex-col md:gap-y-2">
          <img src={logo} alt="Logo" height={120} width={120} />

          <div className="hidden gap-x-2  lg:flex md:self-center">
            <div className="bg-shimmer w-[6rem] h-[2rem]"></div>
            <div className="bg-shimmer w-[6rem] h-[2rem]"></div>
            <div className="bg-shimmer w-[6rem] h-[2rem]"></div>
            <div className="bg-shimmer w-[6rem] h-[2rem]"></div>
            <div className="bg-shimmer w-[6rem] h-[2rem]"></div>
            <div className="bg-shimmer w-[6rem] h-[2rem]"></div>
            <div className="bg-shimmer w-[6rem] h-[2rem]"></div>
            <div className="bg-shimmer w-[6rem] h-[2rem]"></div>
          </div>
          <div className={`flex items-center gap-x-2 xl:hidden lg:hidden `}>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderShimmer;
