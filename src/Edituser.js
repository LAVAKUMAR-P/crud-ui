import React, { useContext, useEffect, useState } from 'react'
import { faUserEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from 'react-router-dom';
import UserContext from './Usercontext';
function Edituser(props) {
  
  const  usercontext = useContext(UserContext);
  const [name, setname] = useState("");
  const [job, setjob] = useState("");
  const [image, setimage] = useState("");
  let history=useHistory();
  useEffect(() => {
    let userData = usercontext.userList[props.match.params.id - 1];
    setname(userData.name);
    setjob(userData.job);
    setimage(userData.image);
  }, [props,usercontext]);
  let handleSubmit=(e)=>{
    e.preventDefault();
    let data={name,job,image};
    usercontext.userList[props.match.params.id - 1]=data;
    usercontext.setUserList([...usercontext.userList]);
    history.push("/user-list");
  }
        return (
            <>
            <header className="header">
            <div className="Dashboard">
              <FontAwesomeIcon icon={faUserEdit} />
              {"\u00a0"}EDIT USER
            </div>
            </header>
            <div className="margin">
        <div className="container">
          <form onSubmit={handleSubmit}>
           <label >NAME</label>
           <input type="text" value={name} className="form-control"   onChange={(e) => {
                setname(e.target.value);
              }} required/>
           <label>JOB</label>
           <input type="text" value={job} className="form-control"   onChange={(e) => {
                setjob(e.target.value);
              }} required/>
           <label>IMAGE</label>
           <input type="text" value={image} className="form-control"   onChange={(e) => {
                setimage(e.target.value);
              }} required/>
           <div className="center">
           <button className="button-two" type="submit">
           <FontAwesomeIcon icon={faUserEdit} />{"\u00a0"}
             EDIT</button>
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

export default Edituser
