import React from "react";
import { Link } from "react-router-dom";

const UsersItem = ({ user: { login, avatar_url, bio } }) => {
  return (
    <div className="card col-lg-3 col-md-4 col-sm-6 col-12 my-3 border-0  text-center">
      <img src={avatar_url} className="card-img-top rounded" alt={login} />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <p className="card-text">{bio}</p>
        <Link to={`/user/${login}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};
// UsersItem.PropTypes = {
//   user: PropTypes.object.isRequired
// };

export default UsersItem;
