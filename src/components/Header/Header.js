import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
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
        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__option--lineTwo header__basketCount">0</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
