import React from "react";
import '../Assets/css/Action.css';

function Action({action}){
    const actionClass = action;
    let actionValue;
    if (action === "invited") {
      actionValue = "Remove";
    } else if (action === "not_invited") {
      actionValue = "Invite";
    }
    else {
      actionValue = "Unknown";
    }
    return(
        <button className={actionClass?`${actionClass} btn`:"unknownAction btn"}>
            {actionValue}
        </button>
    );
}
export default Action;