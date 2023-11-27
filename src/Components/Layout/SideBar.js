import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="../../index3.html" className="brand-link">
        <img
          src="../../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="../../dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <NavLink
                to="/dashboard" className="nav-link"
              >
               <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-list-ol"></i>
                <p>
                  Categories
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                <NavLink
                to="/categories/create" className="nav-link"
              >
               <i className="far fa-circle nav-icon"></i>
                    <p>Add Category</p>
              </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                to="/categories" className="nav-link"
              >
                <i className="far fa-circle nav-icon"></i>
                    <p>All Categories</p>
              </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-list-ol"></i>
                <p>
                  Products
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                <NavLink
                to="/products/create" className="nav-link"
              >
               <i className="far fa-circle nav-icon"></i>
                    <p>Add Product</p>
              </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                to="/products" className="nav-link"
              >
                <i className="far fa-circle nav-icon"></i>
                    <p>All Products</p>
              </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
