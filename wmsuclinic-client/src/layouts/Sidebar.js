import React from "react";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

class Sidebar extends React.Component {
  // https://freefrontend.com/css-sidebar-menus/
    

  render() {
    return (
      <React.Fragment>
      <div className={styles.area}></div>
      <nav className={styles.mainMenu}>
        <ul>
          <li>
            <Link to="/homepage">
              <i className= {styles.fa + " fa fa-home " + styles.fa2x} ></i>
              <span className={styles.navText}>
                Dashboard
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link href="#">
              <i className= {styles.fa + " fa fa-laptop " + styles.fa2x}></i>
              <span className={styles.navText}>
                Stars Components
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link href="#">
              <i className={styles.fa + " fa fa-list " + styles.fa2x}></i>
              <span className={styles.navText}>
                Forms
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link href="#">
              <i className={styles.fa + " fa fa-folder-open " + styles.fa2x}></i>
              <span className={styles.navText}>
                Pages
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className={styles.fa + " fa fa-chart-bar " + styles.fa2x}></i>
              <span className={styles.navText}>
                Graphs and Statistics
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className={styles.fa + " fa fa-font " + styles.fa2x}></i>
              <span className={styles.navText}>
                Quotes
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className={styles.fa + " fa fa-table " + styles.fa2x}></i>
              <span className={styles.navText}>
                Tables
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className={styles.fa + " fa fa-map-marker " + styles.fa2x}></i>
              <span className={styles.navText}>
                Maps
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className={styles.fa + " fa fa-info " + styles.fa2x}></i>
              <span className={styles.navText}>
                Documentation
              </span>
            </Link>
          </li>
      </ul>

      <ul className="logout">
        <li>
          <Link href="#">
            <i className={styles.fa + " fa fa-power-off " + styles.fa2x}></i>
            <span className={styles.navText}>
              Logout
            </span>
          </Link>
        </li>  
      </ul>
      </nav>
      </React.Fragment>
    );
  }
}

export default Sidebar;