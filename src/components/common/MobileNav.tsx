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

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const section = useAppSelector((state) => state.article.section);
  const links = section.map((item) => ({ path: `/${item}`, name: item }));

  links.unshift({ path: "/", name: "home" });

  return (
    <React.Fragment>
      <AlignJustify className="cursor-pointer" onClick={openDrawer} />
      <Drawer open={open} onClose={closeDrawer} placement="right">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            <img src={logo} alt="Logo" height={120} width={120} />
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
        <List>
          {links.map((link) => (
            <ListItem className="uppercase" onClick={closeDrawer}>
              {link.name}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
