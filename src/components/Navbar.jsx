import NavItems from "./NavItems";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex p-2  border-2 items-center justify-between">
      <Logo />
      <NavItems />
    </div>
  );
};

export default Navbar;
