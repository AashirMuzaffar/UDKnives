import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import CategoryIcon from '@material-ui/icons/Category';
import Wallpaper from '@material-ui/icons/Wallpaper';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin/dashboard">
        <img src='/favicon.png' alt="Henry's Forrge" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p>
          <DashboardIcon /> Products
        </p>
      </Link>
      <Link to="/admin/product">
        <p>
          <DashboardIcon /> Create Products
        </p>
      </Link>
      <Link to="/admin/category">
        <p>
          <DashboardIcon /> Create Category
        </p>
      </Link>
      <Link to="/admin/categories">
        <p>
          <DashboardIcon /> Categories
        </p>
      </Link>
      <Link to="/admin/orders">
        <p>
          <DashboardIcon /> Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;