import Users from "./Users";
import Success from "./Success";
import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Problem ");
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log(users);

  return (
    <>
      <Users iteams={users} isLoading={isLoading} />
      {/* <Success/> */}
    </>
  );
}
