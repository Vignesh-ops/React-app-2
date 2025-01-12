
import React from "react";

const Users = ({ setusers, userdata,listdata }) => {
    return (
        <>
            <button className="api1" onClick={()=>setusers('users')}>
                users
            </button>
          
        </>
    );
};
export default Users;  