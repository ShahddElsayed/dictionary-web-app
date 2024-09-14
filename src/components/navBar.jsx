import { useEffect, useState } from "react";
import { ReactComponent as AppLogo } from "../images/logo.svg";
import { ReactComponent as DownArrow } from "../images/icon-arrow-down.svg";
import { ReactComponent as DarkModeIcon } from "../images/icon-moon.svg";
import { useCloseMenuClick } from "../utils/closeMenuClick";

const NavBar = ({ DarkMode, setDarkMode, font, setfont }) => {
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const [fontMenuOpen, setFontMenuOpen] = useState(false);

  useEffect(() => {
    const fontMapping = {
      inter: "Sans Serif",
      lora: "Serif",
      inconsolata: "Mono",
    };
    document.body.style.fontFamily =
      font === "inter" ? "inter" : font === "lora" ? "lora" : "inconsolata";
    setCurrentFont(fontMapping[font]);
  }, [font]);

  useEffect(() => {
    document.body.style.background = DarkMode ? "#050505" : "#FFFFFF";
  }, [DarkMode]);

  const toggleFontMenu = () => setFontMenuOpen(!fontMenuOpen);
  const handleCloseMenuClick = () => setFontMenuOpen(false);
  const ref = useCloseMenuClick(handleCloseMenuClick);
  const handleDarkModeToggle = () => setDarkMode((prevMode) => !prevMode);

  return (
    <header className="navbar">
      <AppLogo className="app-logo" />
      <div className="user-settings">
        <div className="font-selector" onClick={toggleFontMenu} ref={ref}>
          <p style={{ color: DarkMode ? "#FFFFFF" : "#2D2D2D" }}>
            {currentFont}
          </p>
          <DownArrow className="arrow-icon" />
          {fontMenuOpen && (
            <div className="dropdown">
              <p className="dropdown-option" onClick={() => setfont("inter")}>
                Sans Serif
              </p>
              <p className="dropdown-option" onClick={() => setfont("lora")}>
                Serif
              </p>
              <p
                className="dropdown-option"
                onClick={() => setfont("inconsolata")}
              >
                Mono
              </p>
            </div>
          )}
        </div>
        <div className="separator-line"></div>
        <div className="theme-switcher">
          <input
            id="darkModeSwitch"
            name="darkMode"
            type="checkbox"
            checked={DarkMode}
            onChange={handleDarkModeToggle}
          />
          <label htmlFor="darkModeSwitch" className="switch-label">
            <span className="switch-slider"></span>
          </label>
          <DarkModeIcon
            className={`theme-icon ${DarkMode ? "dark-theme" : ""}`}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
