import React from "react";
import EmployListItem from "./EmployListItem";

function EmployeeTable({ users }) {
    // console.log(props)
    return (

        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Picture</th>
                        <th> Name</th>
                        <th> Location</th>
                        <th> Email</th>
                        <th> DOB</th>
                        <th> Phone</th>
                    </tr>
                </thead>
                <EmployListItem
                    users={users} />
            </table>
        </div>


    );
}


export default EmployeeTable;