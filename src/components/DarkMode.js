import React from "react";
import "../styles/DarkMode.css";

const DarkMode = () => {
    let clickedClass = "clicked";           // clickedClass is going to be applied when we click on button === signal the change in the state
    const body = document.body;
    const lightTheme = "light";             //lightTheme and darkTheme are class names applied to the body
    const darkTheme = "dark";
    let theme;                             //theme === local property is used to handle selected mode

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

    return (
        <button
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={(e) => switchTheme(e)}
        ></button>
    );
};

export default DarkMode;
