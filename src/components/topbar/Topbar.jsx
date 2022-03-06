import React from "react";
import "./topbar.scss";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">NKC</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/273431703_1095172844385173_5484246148936044539_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bNFhuAyoewMAX9YedgH&_nc_ht=scontent.fhan4-2.fna&oh=00_AT82ZSL3Vmpw_Ve9EcgbPt6EWVz8Jt7ckyLhOO6IDuIxDw&oe=62271EC3"
            alt="avt"
            className="topAvartar"
          />
        </div>
      </div>
    </div>
  );
}
