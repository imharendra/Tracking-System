import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 
import { 
  FaClock, 
  FaUserCheck, 
  FaChartLine, 
  FaCalendarAlt, 
  FaClipboard, 
  FaBriefcase, 
  FaUsers, 
  FaSignOutAlt, 
  FaQuestionCircle, 
  FaShieldAlt, 
  FaKey 
} from 'react-icons/fa';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('attendance'); // Default active is 'attendance'

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
// const Sidebar = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
//     const toggleSidebar = () => {
//       setIsSidebarOpen(!isSidebarOpen);
//     };

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="profile-pic"></div>
        <div className="user-info">
          <h4>Cameron Williamson</h4>
          <p>cameronwilliamson@gmail.com</p>
        </div>
      </div>

      {/* Menu */}
      <div className="menu">
        <div 
          className={`menu-item ${activeItem === 'timer' ? 'active' : ''}`} 
          onClick={() => handleItemClick('timer')}
        >
          <FaClock className="menu-icon" />
          <span>Timer</span>
        </div>
        <NavLink to="/attendance" className={`menu-item ${activeItem === 'attendance' ? 'active' : ''}`} 
          onClick={() => handleItemClick('attendance')}>
            <FaUserCheck className="menu-icon" />
            <span>Attendance</span>
        </NavLink>
        {/* <div 
          className={`menu-item ${activeItem === 'attendance' ? 'active' : ''}`} 
          onClick={() => handleItemClick('attendance')}
        >
          <FaUserCheck className="menu-icon" />
          <span>Attendance</span>
        </div> */}
        <div 
          className={`menu-item ${activeItem === 'activity' ? 'active' : ''}`} 
          onClick={() => handleItemClick('activity')}
        >
          <FaChartLine className="menu-icon" />
          <span>Activity</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'timesheet' ? 'active' : ''}`} 
          onClick={() => handleItemClick('timesheet')}
        >
          <FaClipboard className="menu-icon" />
          <span>Timesheet</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'report' ? 'active' : ''}`} 
          onClick={() => handleItemClick('report')}
        >
          <FaChartLine className="menu-icon" />
          <span>Report</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'jobsite' ? 'active' : ''}`} 
          onClick={() => handleItemClick('jobsite')}
        >
          <FaBriefcase className="menu-icon" />
          <span>Jobsite</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'team' ? 'active' : ''}`} 
          onClick={() => handleItemClick('team')}
        >
          <FaUsers className="menu-icon" />
          <span>Team</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'timeoff' ? 'active' : ''}`} 
          onClick={() => handleItemClick('timeoff')}
        >
          <FaCalendarAlt className="menu-icon" />
          <span>Time Off</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'schedules' ? 'active' : ''}`} 
          onClick={() => handleItemClick('schedules')}
        >
          <FaClipboard className="menu-icon" />
          <span>Schedules</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'joinorg' ? 'active' : ''}`} 
          onClick={() => handleItemClick('joinorg')}
        >
          <FaShieldAlt className="menu-icon" />
          <span>Request to Join Organization</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'changepass' ? 'active' : ''}`} 
          onClick={() => handleItemClick('changepass')}
        >
          <FaKey className="menu-icon" />
          <span>Change Password</span>
        </div>
        <div 
          className={`menu-item ${activeItem === 'logout' ? 'active' : ''}`} 
          onClick={() => handleItemClick('logout')}
        >
          <FaSignOutAlt className="menu-icon" />
          <span>Logout</span>
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="menu-item">
          <FaQuestionCircle className="menu-icon" />
          <span>FAQ & Help</span>
        </div>
        <div className="menu-item">
          <FaShieldAlt className="menu-icon" />
          <span>Privacy Policy</span>
        </div>
        <p className="version">Version: 2.10(1)</p>
      </div>
    </div>
  );
};
export default Sidebar;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Sidebar.css";
// import {
//   FaBars,
//   FaClock,
//   FaUserCheck,
//   FaChartLine,
//   FaCalendarAlt,
//   FaClipboard,
//   FaBriefcase,
//   FaUsers,
//   FaSignOutAlt,
//   FaQuestionCircle,
//   FaShieldAlt,
//   FaKey,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="sidebar-container">
//       {/* Toggle Button */}
//       <div className="sidebar-toggle" onClick={toggleSidebar}>
//         <FaBars />
//       </div>

//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
//         {/* Header */}
//         <div className="sidebar-header">
//           <div className="profile-pic"></div>
//           <div className="user-info">
//             <h4>Cameron Williamson</h4>
//             <p>cameronwilliamson@gmail.com</p>
//           </div>
//         </div>

//         {/* Menu */}
//         <div className="menu">
//           <div className="menu-item">
//             <FaClock className="menu-icon" />
//             <span>Timer</span>
//           </div>
//           <NavLink to="/attendance" className="menu-item">
//             <FaUserCheck className="menu-icon" />
//             <span>Attendance</span>
//           </NavLink>
//           <div className="menu-item">
//             <FaChartLine className="menu-icon" />
//             <span>Activity</span>
//           </div>
//           {/* Add more menu items as needed */}
//         </div>

//         {/* Footer */}
//         <div className="sidebar-footer">
//           <div className="menu-item">
//             <FaQuestionCircle className="menu-icon" />
//             <span>FAQ & Help</span>
//           </div>
//           <div className="menu-item">
//             <FaShieldAlt className="menu-icon" />
//             <span>Privacy Policy</span>
//           </div>
//           <p className="version">Version: 2.10(1)</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
