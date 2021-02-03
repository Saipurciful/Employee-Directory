import React from "react";
import Styles from "./Header.css"



function SearchForm({ handleInputChange }) {
    // console.log(props)
    return (
        <form className="example">
            <input
                onChange={(e) => handleInputChange(e)}
                placeholder="Search.."
                type="text" />
            {/* <button onClick={props.handleFormSubmit} type="submit"><i className="fa fa-search"></i></button> */}
        </form>
    )
}

export default SearchForm;
