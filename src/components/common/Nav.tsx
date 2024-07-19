import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  activeSection: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  activeSection,
}) => {
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
              link.path.replace(/[ .]/g, "") === `/#${activeSection}` ||
              location.hash === link.path.replace(/[ .]/g, "")
                ? "text-primary"
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
