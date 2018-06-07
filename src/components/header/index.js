import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "../";
import "./styles.css";
import * as actions from "../../actions";
import * as ducks from "../../ducks";

const mainMenu = [
  { text: "New", url: "https://news.ycombinator.com/newest" },
  { text: "Show", url: "https://news.ycombinator.com/show" },
  { text: "Submit", url: "https://news.ycombinator.com/submit" }
];

export const Header = props => (
  <div className="header">
    <Link className="header__logo" to="/">
      <img src="https://news.ycombinator.com/y18.gif" alt="React new logo" />
      React news
    </Link>
    <div className="header__menu">
      <Menu links={mainMenu} />
    </div>
    <button onClick={e => props.toggleTheme()}>toggle theme</button>
  </div>
);

const mapDispatchToProps = {
  //toggleTheme: actions.toggleTheme
  toggleTheme: ducks.ui.actions.toggleTheme
};

export default connect(null, mapDispatchToProps)(Header);
