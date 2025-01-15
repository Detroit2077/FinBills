import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { IoSettingsOutline, IoSettings } from "react-icons/io5";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './assets/images/logo.png';
import './common.css';

const Appbar = () => {
  const [notification, setNotification] = useState(false);
  const [settings, setSettings] = useState(false);

  return (
    <div
      className="w-full h-16 bg-slate-200 flex justify-between bg-opacity-55 backdrop-blur-md rounded-md"
     
    >
      <div className="flex items-center justify-center font-bold text-xl ml-10 ">
            <img src={logo} alt="logo" className="h-32 w-32 select-none fixed-size"/>
      </div>

      <div className="flex gap-5 mr-10 items-center">
        {!notification ? (
          <IoMdNotificationsOutline
            size={20}
            color="black"
            onClick={() => setNotification(!notification)}
          />
        ) : (
          <IoMdNotifications
            size={20}
            onClick={() => setNotification(!notification)}
          />
        )}
        {!settings ? (
          <IoSettingsOutline onClick={() => setSettings(!settings)} />
        ) : (
          <IoSettings onClick={() => setSettings(!settings)} />
        )}
        {/* <Avatar alt="Tanishq" src="/static/images/avatar/1.jpg" /> */}
      </div>
    </div>
  );
};

export default Appbar;