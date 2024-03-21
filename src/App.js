import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Spinner from "./components/Spinner";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import getWeatherUpdateAction from "./redux/actions/weatherActions";

function App() {
  const [city, setCity] = useState("kigali");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherUpdateAction(city));
  }, [dispatch]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    dispatch(getWeatherUpdateAction(city));
  };

  const handleReset = () =>{
    setCity(city => "kigali")
    dispatch(getWeatherUpdateAction("kigali"))
  }

  const {loading, error} =  useSelector(state => state?.weather);

  return (
    <div className="block bg-gray-900 min-h-screen m-0 items-center">
      <div className="flex flex-col mx-auto py-10">
        <section>
          <Header />
        </section>

        <div>
        
          {
            loading ?(
              <Spinner message={`Please wait as we load the weather for ${city}`}/>
            ): error ?(
              <div className="flex flex-col items-center">
               <h3 className="text-red-400 text-lg text-center mt-2 capitalize">{error?.message}</h3>
               <Button name="Back" styles="bg-blue-200 text-gray-800 mx-auto mt-6" onClick={handleReset} />
               </div>
            ): (
              <Fragment>
              
          <section className="flex justify-center mt-6">
            <span>
            <Input placeholder="Enter city" value={city} onChange={handleChange} />
            </span>

              <span>
              <Button name="Search" onClick={handleSearch} styles="bg-indigo-600 text-white ml-3" />
              </span>

          </section>

          <section>
            <Weather />
          </section>
              </Fragment>
            )
          }
        
        </div>
      </div>

      <section className="">
        <Footer />
      </section>
    </div>
  );
}

export default App;
