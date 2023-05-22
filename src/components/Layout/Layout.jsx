import { useState } from "react";
import Auth from "../Auth/Auth";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import CartLink from "../CartLInk/CartLink";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <CartLink />
          <Auth />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
