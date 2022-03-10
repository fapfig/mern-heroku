import { useState, useEffect } from "react";

const Local = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/user/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <main className="container">
      <div className="bg-light p-5 rounded">
        <div>
          {users.map((e, i) => (
            <div key={e._id}>
              <div>User: {i + 1}</div>
              <div>Name: {e.firstname + " " + e.lastname}</div>
              <div>Email: {e.email}</div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Local;
