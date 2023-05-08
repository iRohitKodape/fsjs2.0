import { MdSoupKitchen } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <section className="nav">
      <div className="left">
        <MdSoupKitchen size="24px" />
        <span className="logo-txt">Foodie-fy.</span>
      </div>
      <div className="right">
        <GiHamburgerMenu size="24px" />
      </div>
    </section>
  );
};
export default Navbar;
