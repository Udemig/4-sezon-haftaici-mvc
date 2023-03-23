import React from "react";

import { Link } from "react-router-dom";

import styles from './style/header.module.css'

const Header=()=>{
    console.log(styles);
    return(
        <nav className={`${styles.container} ${styles.container2}`}>
            <div>
                <Link to={"/"} >Home</Link>
            </div>
            <div>
                <Link to={"/add-book"}>Add Book</Link>
            </div>
        </nav>
    )
}

export default Header