import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <Link to="/users/1">User 1</Link>
      <br />
      <Link to="/users/2">User 2</Link>
      <br />
      <Link to="/users/3">User 3</Link>
      <br />
      <button
        onClick={() =>
          setSearchParams({
            filter: "active",
          })
        }
      >
        Active Users
      </button>
      <br />
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
};

export default User;
