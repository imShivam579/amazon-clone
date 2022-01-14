import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../../redux/StateProvider";
import { Link } from "react-router-dom";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
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
        <div className="header__option">
          <div className="header__option--lineOne">Hello guest</div>
          <div className="header__option--lineTwo">Sign In</div>
        </div>
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
