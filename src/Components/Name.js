import React from "react";
import '../Assets/css/Name.css';

function Name({fullName}) {
    return(
      
            <div className="Name__letter">
            <div className="Name__first">
                 <p>{fullName?.slice(0, 1)||null}</p>
            </div>
            <div className="Name__fullName">
                 <p>{fullName ? fullName : "N/A"}</p>
            </div>
            </div>

     
    )
}

export default Name;