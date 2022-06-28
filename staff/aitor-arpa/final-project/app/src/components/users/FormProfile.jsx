import React from "react";
import "./FormProfile.sass";
import retrieveUser from "../../logic/retrieveUser";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import CardUser from "../users/CardUser";

export default function FormProfile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => {
          setUser(user);
        })

        .catch((error) => {
          toast.error(error);
        });
    } catch (error) {
      toast.error(error);
    }
  };

  return user ? (
    <CardUser
      name={user.name}
      username={user.username}
      nid={user.nid}
      email={user.email}
      address={user.address}
    />
  ) : (
    <p> Datos incompletos </p>
  );
}
