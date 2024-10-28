import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:username", name: "Profile" }
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div onClick={() => setOpen(!open)} className="cursor-pointer md:hidden">
        {open ? "Close" : "Menu"}
        <RiMenuFill className="text-2xl" />
      </div>
      
      <ul className={`md:flex duration-1000 absolute md:static bg-slate-200 px-6 shadow-lg ${open ? "top-16" : "-top-60"} md:block`}>
        {routes.map(route => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
