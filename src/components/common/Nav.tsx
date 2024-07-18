import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const section = useAppSelector((state) => state.article.section);

  const links = section.map((item) => ({ path: `/${item}`, name: item }));

  links.unshift({ path: "/", name: "home" });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <a href={link.path} key={index} className={`uppercase ${linkStyles}`}>
            {/* {link.path === location.pathname && (
              <span className={`${underlineStyles}`} />
            )} */}
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
