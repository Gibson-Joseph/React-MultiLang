import React from "react";
import logo from "./logo.svg";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./App.css";

function App() {
  const language = [
    {
      code: "en",
      name: "English",
      country_code: "en",
    },
    {
      code: "fr",
      name: "française",
      country_code: "fr",
    },

    {
      code: "ar",
      name: "عربى",
      country_code: "ar",
    },
  ];

  //method:1
  const changeLang = (e: any) => {
    console.log(e.target.value);

    i18next.changeLanguage(e.target.value);
  };

  const { t } = useTranslation();
  const releseDate: any = new Date("2022-08-08");
  const timeDifference: any = new Date().getTime() - releseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <div className="App">
      <div>
        <select name="" id="" onChange={changeLang}>
          {language.map((item: any) => (
            <option key={item.country_code} value={item.country_code}>
              {item.name}
            </option>
          ))}
        </select>
        {/* method:2 */}
        {/* {language.map((item) => (
          <button onClick={() => i18next.changeLanguage(item.code)}>
            {item.name}
          </button>
        ))} */}
      </div>
      <h1>{t("welcome_message")}</h1>
      <p>{t("days_since_release", { number_of_days })}</p>
    </div>
  );
}

export default App;
