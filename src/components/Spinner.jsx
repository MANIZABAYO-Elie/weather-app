import React from "react";

const Spinner = ({message}) => {
    return ( 
        <div className="flex flex-col justify-center items-center mx-auto h-80 w-72">
            <div className="flex border-2 border-yellow-600 border-b-0 animate-spin transition ease-in-out duration-3000 rounded-full h-16 w-16 mb-4"/>
            <p className="flex text-white text-sm font-light text-center">{message}</p>
            {/* <p>{abdul}</p> */}

            </div>

        
     );
}
 
export default Spinner;


//{message} = props if in "p"=> props.message   and u have to provide that variable in body/p/h1 then u will 
//assing the value to that variable in App.js