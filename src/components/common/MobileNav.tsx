import React from "react";
import logo from "../../assets/logo.png";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { AlignJustify } from "lucide-react";
import { useAppSelector } from "../../redux/hooks";
import { Link, useLocation } from "react-router-dom";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const location = useLocation();
  const section = useAppSelector((state) => state.article.section);

  const links = section.map((item) => ({ path: `/#${item}`, name: item }));

  links.unshift({ path: "/#home", name: "home" });

  return (
    <React.Fragment>
      <AlignJustify className="cursor-pointer" onClick={openDrawer} />
      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder={undefined}
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography
            variant="h5"
            color="blue-gray"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Link to="/#home">
              <img src={logo} alt="Logo" height={120} width={120} />
            </Link>
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {links.map((link, index) => (
            <ListItem
              onClick={closeDrawer}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Link
                className={`uppercase  ${
                  location.hash === link.path.replace(/[/ .]/g, "")
                    ? "text-primary"
                    : ""
                }`}
                key={index}
                to={link.path.replace(/[ .]/g, "")}
              >
                {link.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
