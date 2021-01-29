import React from "react";
import EmployListItem from "./EmployListItem";

function EmployeeTable(props) {
    // console.log(props)
    return (
        <div className="text-center">
            <table>
                <thead>
                    <tr>
                        <th> Picture</th>
                        <th> Employee Name</th>
                        <th> Location</th>
                        <th> Email</th>
                        <th> DOB</th>
                        <th> Phone</th>
                    </tr>
                </thead>
                <EmployListItem
                    users={props.users} />
            </table>


        </div>
    );
}

export default EmployeeTable;
