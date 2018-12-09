import React from "react";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";

function Sidebar(props) {
  const { children } = props;
  return (
    <Menu {...props} className="menu sidebar">
      {children}
    </Menu>
  );
}

export default reduxBurgerMenu(Sidebar);
