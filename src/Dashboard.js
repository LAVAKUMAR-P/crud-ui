import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faListAlt,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "./Card";
import UserContext from "./Usercontext";

function Dashboard() {
  let usercontent = useContext(UserContext);
  return (
    <>
      <header className="header">
        <div className="Dashboard">
          <FontAwesomeIcon icon={faHome} />
          {"\u00a0"}DASHBOARD
        </div>
        <div>
          <Link to="/user-list">
            <button className="button-one">
              <FontAwesomeIcon icon={faListAlt} />
              {"\u00a0"}USER LIST
            </button>
          </Link>
          <Link to="/create-user">
          <button className="button-one">
            <FontAwesomeIcon icon={faPlusSquare} />
            {"\u00a0"}CREAT USER
          </button>
          </Link>
        </div>
        <div className="user-list">
          {
        usercontent.userList.map((el,index)=>{
          return(
            <Card data={el} number={index}></Card>
          );
          
          }
          )}
          </div>
      </header>
     
    </>
  );
}

export default Dashboard;
