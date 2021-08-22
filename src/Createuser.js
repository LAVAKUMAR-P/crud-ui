import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import UserContext from "./Usercontext";

function Createuser() {
  const  usercontext = useContext(UserContext);
  const [name, setname] = useState("");
  const [job, setjob] = useState("");
  const [image, setimage] = useState("");
  let history=useHistory()
  let handleSubmit=(e)=>{
    e.preventDefault();
    let data={name,job,image};
    usercontext.setUserList([...usercontext.userList,data]);
    history.push("/user-list");
  }
    return (
        <>
        <header className="header">
        <div className="Dashboard">
          <FontAwesomeIcon icon={faPlusSquare} />
          {"\u00a0"}CREATE USER
        </div>
        </header>
        <div className="margin">
        <div className="container">
          <form onSubmit={handleSubmit}>
           <label for="name">NAME</label>
           <input type="text" className="form-control"   onChange={(e) => {
                setname(e.target.value);
              }} required/>
           <label for="name">JOB</label>
           <input type="text" className="form-control"   onChange={(e) => {
                setjob(e.target.value);
              }} required/>
           <label for="name">IMAGE</label>
           <input type="text" className="form-control"   onChange={(e) => {
                setimage(e.target.value);
              }} required/>
           <div className="center">
           <button className="button-two" type="submit">
           <FontAwesomeIcon icon={faPlusSquare} />{"\u00a0"}
             SUBMIT</button>
             <Link to="/user-list">
             <button className="button-two">
           <FontAwesomeIcon icon={faWindowClose} />{"\u00a0"}
             CANCEL
             </button>
          </Link>
           </div>
           </form>
        </div>
        </div>
      </>
    )
}

export default Createuser
