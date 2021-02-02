import React from "react";
import "./Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const styles = {
    header: {
        background: "skyblue"
    },


}

function Header() {
    return (
        <header className="header" style={styles.header}>
            <h1 >Employee Directory</h1>
        </header>
    );
}

export default Header;
