import React from 'react'
import Employee from './Employee'

function EmployListItem(props) {
        // {props.users.map((user) => 
        console.log(props)
        return (

                <tbody>
                        <tr>
                                <td> dieikdiei</td>
                                <td>Defaultson</td>
                                <td>def@somemail.com</td>
                                <td> ddjdj</td>
                                <td> dieikdiei</td>
                                <td> dieikdiei</td>
                        </tr>
                        <tr>
                                <td> dieikdiei</td>
                                <td>Defaultson</td>
                                <td>def@somemail.com</td>
                                <td> {props.email}</td>
                                <td> dieikdiei</td>
                                <td> dieikdiei</td>
                        </tr>


                </tbody>



        )
}

export default EmployListItem
