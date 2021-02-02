import React from "react";
import Styles from "./Header.css"



function SearchForm(props) {
    return (
        <form className="example">
            <input
                onChange={props.handleInputChange}
                value={props.value}
                placeholder="Search.."
                name="search2"
                type="text" />
            <button onClick={props.handleFormSubmit} type="submit"><i class="fa fa-search"></i></button>
        </form>
    )
}


{/* //     <form className="form" style={Styles.SearchForm}>
    //     <div className="form-group">
    //         <label htmlFor="search">Search:</label>
    //         <input
    //             onChange={props.handleInputChange}
    //             value={props.value}
    //             name="search"
    //             type="text"
    //             className="form-control"
    //             placeholder="Search For Employee"
    //             id="search"
    //         ></input>
    //         <br />
    //         <button onClick={props.handleFormSubmit} className="btn btn-primary">
    //             Search
    //     </button>
    //     </div>
    // </form>
    );
} */}

export default SearchForm;
