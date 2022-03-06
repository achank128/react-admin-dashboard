import React from "react";
import "./user.scss";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              src="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/273431703_1095172844385173_5484246148936044539_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bNFhuAyoewMAX9YedgH&_nc_ht=scontent.fhan4-2.fna&oh=00_AT82ZSL3Vmpw_Ve9EcgbPt6EWVz8Jt7ckyLhOO6IDuIxDw&oe=62271EC3"
              alt="avt"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck21</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">12/4/2001</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">0923717124</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck21@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdeteTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annabeck99"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Anna Becker"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annabeck21@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="0923717124"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="New York | USA "
                />
              </div>
            </div>
            <div className="useUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/273431703_1095172844385173_5484246148936044539_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bNFhuAyoewMAX9YedgH&_nc_ht=scontent.fhan4-2.fna&oh=00_AT82ZSL3Vmpw_Ve9EcgbPt6EWVz8Jt7ckyLhOO6IDuIxDw&oe=62271EC3"
                  alt="avt"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
