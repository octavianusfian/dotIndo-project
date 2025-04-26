import { useAppSelector } from "@/store/hooks";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "task-management", text: "task management" },
  { id: 3, url: "catalog-products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
];

const NavLinks = () => {
  //   const user = useSelector((state) => state.userState.user);
  const user = useAppSelector((state) => state.authState.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "cart" || url === "task-management") && !user) return null;
        return (
          <li className="capitalize" key={id}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary transition-colors duration-300 ${
                  isActive ? "text-primary font-semibold" : ""
                }`
              }
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
