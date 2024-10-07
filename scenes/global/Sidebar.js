import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export default function Sidebar() {
  return (
    <ul>
      <li>
        <Link to="/">
          <HomeOutlinedIcon />
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/team">
          <PeopleOutlinedIcon />
          <span>team</span>
        </Link>
      </li>
      <li>
        <Link to="/contacts">
          <ContactsOutlinedIcon />
          <span>Contacts</span>
        </Link>
      </li>
      <li>
        <Link to="/invoices">
          <ReceiptOutlinedIcon />
          <span>Invoices</span>
        </Link>
      </li>
      {/* <li>
        <Link to="/Profile">
          <PersonOutlinedIcon />
          <span>Profile</span>
        </Link>
      </li> */}
      <li>
        <Link to="/calendar">
          <CalendarTodayOutlinedIcon />
          <span>Calendar</span>
        </Link>
      </li>
      <li>
        <Link to="/help">
          <HelpOutlineOutlinedIcon />
          <span>Help</span>
        </Link>
      </li>
      <li>
        <Link to="/bar">
          <BarChartOutlinedIcon />
          <span>Bar Chart</span>
        </Link>
      </li>
      <li>
        <Link to="/pie">
          <PieChartOutlineOutlinedIcon />
          <span>Pie Chart</span>
        </Link>
      </li>
      <li>
        <Link to="/line">
          <TimelineOutlinedIcon />
          <span>Line Chart</span>
        </Link>
      </li>
      <li>
        <Link to="/map">
          <MapOutlinedIcon />
          <span>Map</span>
        </Link>
      </li>
    </ul>
  );
}
