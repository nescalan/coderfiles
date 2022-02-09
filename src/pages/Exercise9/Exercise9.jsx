import { useEffect, useState } from "react";
import { UsersCard } from "../../components";

const fetchUrl = "https://random-data-api.com/api/users/random_user?size=10";

const Exercise9 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  console.log(users);

  return (
    <>
      <div className="container">
        <h1>Exercise 9: Working with an API</h1>

        <UsersCard users={users} />
      </div>
    </>
  );
};

export { Exercise9 };
