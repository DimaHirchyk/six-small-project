import Users from "./Users";
import Success from "./Success";
import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [invaites, setInvaites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [search, setSearch] = useState("");

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

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onClickIvaite = (id) => {
    if (invaites.includes(id)) {
      setInvaites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvaites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvait = () => {
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <Success count={invaites.length} />
      ) : (
        <Users
          searchValue={search}
          onChangeSearch={onChangeSearch}
          iteams={users}
          isLoading={isLoading}
          onClickIvaite={onClickIvaite}
          invaites={invaites}
          onClickSendInvait={onClickSendInvait}
        />
      )}
    </>
  );
}
