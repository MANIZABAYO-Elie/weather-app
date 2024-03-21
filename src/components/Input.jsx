import React from "react";

const Input = ({ placeholder, onChange, value}) => {
    return ( 
        <div className="">
            <input type="text" 
            value={value}
            placeholder={ placeholder }
            onChange={ onChange }
            className ="border border-gray-200 rounded-md text-sm text-white h-8 bg-gray-900"
            />
        </div>
     );
}
 
export default Input;