/* eslint-disable no-unused-vars */
import {
  GetCountries,
  GetState,
  GetCity,
  GetLanguages, //async functions
} from "react-country-state-city";

import { useEffect, useState } from "react";
import Selector from "./Selector";

function App() {
  const [countries, setCountries] = useState();
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [country, setCountry] = useState({});
  const [state, setState] = useState({});
  const [city, setCity] = useState({});
  // console.log(country);
  // console.log(stateData);
  // console.log(state);
  useEffect(() => {
    GetCountries().then((result) => {
      setCountries(result);
    });
  }, []);

  useEffect(() => {
    setStateData([]);
    setCityData([]);
    setState({});
    setCity({});
    GetState(country?.id).then((result) => {
      setStateData(result);
    });
  }, [country]);

  useEffect(() => {
    // setStateData([]);
    setCityData([]);
    setCity({});
    GetCity(country?.id, state?.id).then((result) => {
      setCityData(result);
    });
  }, [country?.id, state]);

  // useEffect(() => {
  //   setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  // }, [country?.isoCode, state]);

  // useEffect(() => {
  //   stateData && setState(stateData[0]);
  // }, [stateData]);

  // useEffect(() => {
  //   cityData && setCity(cityData[0]);
  // }, [cityData]);

  return (
    <>
      <section className="min-h-screen px-3 grid place-items-center pb-20 selection:text-white selection:bg-teal-500 bg-gradient-to-r from-slate-700 to-slate-800">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Country, State and City Selectors
          </h2>
          <br />
          <div className="  gap-3 rounded-lg p-8">
            <div className="mb-4">
              <p className="text-white font-semibold">Country :</p>
              <Selector
                data={countries}
                selected={country}
                setSelected={setCountry}
                placeholder="Select Country"
              />
            </div>

            {
              <div className="mb-4">
                <p className="text-white font-semibold">State :</p>
                <Selector
                  data={stateData}
                  selected={state}
                  setSelected={setState}
                  placeholder="Select State"
                />
              </div>
            }
            {
              <div className="mb-4">
                <p className="text-white font-semibold">City :</p>
                <Selector
                  data={cityData}
                  selected={city}
                  setSelected={setCity}
                  placeholder="Select City"
                />
              </div>
            }

            <div className="grid mt-6 justify-items-end">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => {}}
              >
                Submit!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
