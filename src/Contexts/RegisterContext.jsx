import React, { useEffect, useState } from "react";

export const RegisterContext = React.createContext();

export default function RegisterContextProvider({ children }) {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setgender] = useState("ชาย");
  const [day, setDay] = useState("01");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("2023");
  const [typeAdmin, setTypeAdmin] = useState("Admin");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [idCard, setidCard] = useState("");
  const [profile, setProfile] = useState([]);
  const [refreshFetch, setRefreshFetch] = useState();

  useEffect(() => {
    console.log("show:", showModalRegister);
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("gender:", gender);
    console.log("day:", day);
    console.log("month:", month);
    console.log("year:", year);
    console.log("type admin:", typeAdmin);
    console.log("tel:", tel);
    console.log("idCard:", idCard);
    console.log("profile:", profile);
    console.log("-----------------------------");
  }, [
    showModalRegister,
    firstName,
    lastName,
    gender,
    day,
    month,
    year,
    typeAdmin,
    tel,
    idCard,
    profile,
  ]);

  return (
    <RegisterContext.Provider
      value={{
        showModalRegister,
        setShowModalRegister,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        gender,
        setgender,
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
        typeAdmin,
        setTypeAdmin,
        tel,
        setTel,
        idCard,
        setidCard,
        profile,
        setProfile,
        email,
        setEmail,
        refreshFetch,
        setRefreshFetch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
