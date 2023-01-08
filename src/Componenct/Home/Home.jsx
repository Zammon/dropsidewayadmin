//React import
import React, { useState, useEffect, useContext } from "react";
//CSS import
import "./Home.css";
//Axios import
import axios from "axios";
import { SelectsContext } from "../UseContexts/SelectContext";

export default function Home() {
    const { selectTypePost } = useContext(SelectsContext);

    return(
       <>
        <div className="container-page">
            Home admin
            <div className="">
                
            </div>
        </div>
       </>
    )
}