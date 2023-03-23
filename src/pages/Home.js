import React from "react";

import Header from "../components/header";
import ListStudentsController from "../components/listStudents/ListStudentsController";


const Home=()=>{
    return(
        <div>
            <Header />
            <ListStudentsController />
        </div>
    )
}

export default Home