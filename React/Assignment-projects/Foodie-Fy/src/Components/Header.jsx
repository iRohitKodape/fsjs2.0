
import { ImSpoonKnife } from "react-icons/im";

function Header() {
  return (
    <header
      className="header"
    >
      <div className="layer">
        <div className="container">
          <nav className="logo-wrapper">
            <div className="logo">
              <ImSpoonKnife className="brand" />
            </div>
          </nav>
          <div className="header-text">
            <h1>FOODIE-FY</h1>
            <p>Deliciously Awesome food Here...</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
