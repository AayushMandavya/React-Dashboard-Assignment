import React from "react";
import '../Assets/css/Position.css';

function Position({position}){
return(
    <div className="Position">
            <h1 className="Position__value">
                {position?position:"Null"}
            </h1>
    </div>
);
}

export default  Position;