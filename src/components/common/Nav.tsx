import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface NavProps {
  containerStyles: string;
  linkStyles: string;
}

const Nav: React.FC<NavProps> = ({ containerStyles, linkStyles }) => {
  const section = useAppSelector((state) => state.article.section);
  const location = useLocation();
  const links = section.map((item) => ({ path: `/#${item}`, name: item }));

  links.unshift({ path: "/#home", name: "home" });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            className={`uppercase ${linkStyles} ${
              location.hash === link.path.replace(/[ .]/g, "")
                ? "bg-primary"
                : ""
            }`}
            key={index}
            to={link.path.replace(/[ .]/g, "")}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
