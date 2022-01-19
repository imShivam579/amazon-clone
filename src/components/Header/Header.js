import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../../redux/StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <div className="header__option--lineOne">
              Hello
              {!user ? "Guest" : user.email}
            </div>
            <div className="header__option--lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>
        <div className="header__option">
          <div className="header__option--lineOne">Returns</div>
          <div className="header__option--lineTwo">& orders</div>
        </div>
        <div className="header__option">
          <div className="header__option--lineOne">your</div>
          <div className="header__option--lineTwo">Prime</div>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__option--lineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
