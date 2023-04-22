import React from "react";
import '../Assets/css/Status.css';
function Status({status}){

      return(
          <div className="status">
              <p className={status?status:"Unknown"}>
                {status}
              </p>
          </div>
      );

}
export default Status;