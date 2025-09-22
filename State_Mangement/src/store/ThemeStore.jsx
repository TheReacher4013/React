import { createContext, useState, useContext } from "react";

// object with default value and struture subscribing to the store using createContext()
const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => { },
});

// hook to access our store value
export const useTheme = () => {
    const context = useContext(ThemeContext);
    console.log(context);
    return context;
};

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevState) =>
            prevState === "light" ? "dark" : "light"
        );
    };

    const themValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themValue}>
            {props.children}
        </ThemeContext.Provider>
    );
};