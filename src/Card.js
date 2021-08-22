import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Card(props) {
  return (
      <>
    
    <div className="card">
     <div>
      <img src={props.data.image} className="image" alt="Avatar"/>
      
      <div>
          <h1>NAME :{props.data.name}</h1>
        <h5>JOB : {props.data.job}</h5>
        <div className="center">
        <Link to={`/edit-user/${props.number+1}`}>
        <button className="button-two">
          <FontAwesomeIcon icon={faEdit}/>
          {"\u00a0"}
          EDIT
          </button>
        </Link>
        </div>
      </div>
      </div>
    </div>
    
    </>
  );
}

export default Card;
