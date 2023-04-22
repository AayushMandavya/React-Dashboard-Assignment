import React from "react";
import '../Assets/css/Header.css';

function Header(){
    return(
    <div className="header">
        <p className="name">Name</p>
        <p className="pos">Position</p>
        <p className="stat">Status</p>
        <p className="prog">Progress</p>
        <p className="action">Action</p>

    </div>
    );
}

export default Header;