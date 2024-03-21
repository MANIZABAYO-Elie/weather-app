import React from "react";

const Button = ( { name, onClick, styles}) => {
    return ( 
        <button type=""
        onClick={ onClick }
        className={`${styles} rounded-md w-16 h-8 `}
        > { name }</button>
     );
}
 
export default Button;