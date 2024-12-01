import React, { useEffect, useState } from "react";
import "./attendance.css";
import { FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Attendance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/members.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="attendance-container">
      {/* <h1 className="attendance-title">Attendance List</h1> */}
      <div className="header">
        <div className="options">
          <img src="" />
          <h3>Attendance</h3>
        </div>
        <div className="viewmembers">
          {/* <div className="memberimg"> */}
            <img src="members.jpg"className="memberimg" />
          {/* </div> */}
          <div className="members">All Members</div>
          <div className="change">Change</div>
        </div>
      </div>
      <div className="calendar">
        <div className="date">Tue,Aug 31,2024</div>
        <div className="dateicon">
          <img src="calendar.jpg"/>
        </div>
      </div>
      <div className="attendance-list">
        {data.map((member) => (
          <div key={member.id} className="attendance-card">
            <img
              src={member.image || "https://via.placeholder.com/150"}
              alt={member.name}
              className="attendance-avatar"
            />
            <div className="attendance-details">
              <div className="details">
                <div className="nameid">
                  <p className="attendance-name">{member.name}</p>
                  <p className="attendance-id">({member.id})</p>
                </div>
                <div className="location">
                  <div className="left">
                    {/* <FaMapMarkerAlt className="action-icon" title="View Location" /> */}
                    <img src="leftimg.png" />
                  </div>
                  <div className="right">
                    {/* <FaMapMarkerAlt className="action-icon" title="View Location" /> */}
                    <img src="rightimg.png" />
                  </div>
                </div>
              </div>
              <div className="time">
                <p className="attendance-time">
                  <div className="attendance-actions">
                    {member.loginTime === "NOT LOGGED IN YET" ? (
                      <FaExclamationCircle className="status-icon late-icon" />
                    ) : (
                      <FaCheckCircle className="status-icon working-icon" />
                    )}
                    {" "}

                  </div>
                  <span
                    className={`status ${member.loginTime === "NOT LOGGED IN YET" ? "status-late" : "status-working"
                      }`}
                  >
                    {member.loginTime}
                  </span>

                </p>
                <p className="attendance-time">
                  <div className="attendance-actions">
                    {member.loginTime === "NOT LOGGED IN YET" ? (
                      <FaExclamationCircle className="status-icon late-icon" />
                    ) : (
                      <FaCheckCircle className="status-icon working-icon" />
                    )}
                    {member.logoutTime || "N/A"}
                  </div>
                </p>

              </div>
            </div>
          </div>
        ))}
              <Link to={"/allmembers"} type="button" className="showmap-btn">
                Show Map View
              </Link>
      </div>
    </div>
  );
};

export default Attendance;
