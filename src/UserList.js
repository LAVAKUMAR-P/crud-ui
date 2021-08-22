import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faHome,
  faListAlt,
  faPlusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserContext from "./Usercontext";

function Userslist() {
  const usercontent = useContext(UserContext);
  let handleDelete = (id) => {
    let confirm = window.confirm("Are you want to delete user ?");
    if (confirm) {
      usercontent.userList.splice(id - 1, 1);
      usercontent.setUserList([...usercontent.userList]);
    }
  };
  return (
    <header className="header">
      <div className="Dashboard">
        <FontAwesomeIcon icon={faListAlt} />
        {"\u00a0"}USER LIST
      </div>
      <div>
        <Link to="/">
          <button className="button-one">
            <FontAwesomeIcon icon={faHome} />
            {"\u00a0"}DASHBOARD
          </button>
        </Link>
        <Link to="/create-user">
        <button className="button-one">
          <FontAwesomeIcon icon={faPlusSquare} />
          {"\u00a0"}CREAT USER
        </button>
        </Link>
      </div>
      <div className="container">
      <div className=" table-responsive table-responsive-xl">
        <table className="table table-bordered border-primary" id="dataTable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">JOB</th>
              <th scope="col" className="td-fixed">IMAGE</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
          {
           usercontent.userList.map((el,index)=>
           {
             return(
            <tr>
            <th scope="row">{index+1}</th>
            <td>{el.name}</td>
            <td>{el.job}</td>
            <td>{el.image}</td>
            <td>
              <Link to={`/edit-user/${index+1}`}>
              <button className="btn btn-primary margin">
              <FontAwesomeIcon icon={faEdit}/>
                EDIT
                </button>
              </Link>
              <button className="btn btn-danger margin" onClick={()=>{handleDelete(index+1)}}>
              <FontAwesomeIcon icon={faTrash}/>
                DELETE
                </button>
            </td>
            </tr>
           );
           }
           )
 
          }
          </tbody>
        </table>
      </div>
      </div>
    </header>
  );
}

export default Userslist;
