import React from 'react';
import './LeftBar.scss';
import {
  Friends,
  Groups,
  Market,
  Watch,
  Memories,
  Events,
  Gaming,
  Gallery,
  Videos,
  Messages,
  Fund,
  Tutorials,
  Courses,
} from '../../utils/images';

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://media.istockphoto.com/photos/what-challenges-us-can-help-change-us-picture-id1014076102?k=20&m=1014076102&s=612x612&w=0&h=tcCHSV1TF-3KWj2mH4GVd4CxQdJJabhd2Wit0kLok5U="
              alt=""
            />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img
              src={Friends}
              alt=""
            />
            <span>Friends</span>
          </div>
          <div className="item">
            <img
              src={Groups}
              alt=""
            />
            <span>Groups</span>
          </div>
          <div className="item">
            <img
              src={Market}
              alt=""
            />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img
              src={Watch}
              alt=""
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src={Memories}
              alt=""
            />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img
              src={Events}
              alt=""
            />
            <span>Events</span>
          </div>
          <div className="item">
            <img
              src={Gaming}
              alt=""
            />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img
              src={Gallery}
              alt=""
            />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img
              src={Videos}
              alt=""
            />
            <span>Videos</span>
          </div>
          <div className="item">
            <img
              src={Messages}
              alt=""
            />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img
              src={Fund}
              alt=""
            />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img
              src={Tutorials}
              alt=""
            />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img
              src={Courses}
              alt=""
            />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
