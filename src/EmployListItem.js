import React from 'react'

function EmployListItem(props) {
    console.log(props)
    return (
        <tbody>
            <tr>
                <td> {props.picture} </td>
                <td> {props.name} </td>
                <td> {props.location} </td>
                <td> {props.email} </td>
                <td> {props.dob} </td>
                <td> {props.phone} </td>
            </tr>
        </tbody>
    )
}

export default EmployListItem
