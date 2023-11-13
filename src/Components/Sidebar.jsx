import React, { useState } from "react";
import {
    FaBars,
    FaTh,
    FaCommentDots,
    FaBullhorn,
    FaList,
    FaPager,
    FaMobileAlt,
    FaCog,
    FaRocket,
    FaSlack
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem= [
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/sms",
            name:"SMS",
            icon:<FaCommentDots/>
        },
        {
            path:"/voice",
            name:"Voice",
            icon:<FaBullhorn/>
        },
        {
            path:"/ussd",
            name:"USSD",
            icon:<FaList/>
        },
        {
            path:"/airtime",
            name:"Airtime",
            icon:<FaPager/>
        },
        {
            path:"mobiledata",
            name:"Mobile Data",
            icon:<FaMobileAlt/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaCog/>
        },
        {
            path:"/launchsimulator",
            name:"Launch Simulator",
            icon:<FaRocket/>
        },
        {
            path:"/slack",
            name:"Slack",
            icon:<FaSlack/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
