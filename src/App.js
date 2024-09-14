import React, { useState } from "react";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import WordDetails from "./components/wordDetails";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [font, setFont] = useState("inter");
  const [wordData, setWordData] = useState(null);

  const fetchWordData = async (word) => {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await res.json();
      setWordData(data);
    } catch (error) {
      console.error("Error fetching word data:", error);
    }
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <NavBar
        DarkMode={darkMode}
        setDarkMode={setDarkMode}
        font={font}
        setfont={setFont}
      />
      <SearchBar onSearch={fetchWordData} />
      <WordDetails wordData={wordData} />
    </div>
  );
};

export default App;
