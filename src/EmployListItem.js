import React from 'react'


function EmployListItem({ users }) {

        console.log(users)
        return (
                <tbody>
                        {/* map thru array if 1st element exit undefined */}
                        {users[0] !== undefined && users[0].name !== undefined ? (
                                users.map(({ name, picture, phone, email, dob, login }) => {
                                        return (
                                                <tr key={login.uuid}>
                                                        <td><img src={picture.medium} alt={`profile image for ${name.first} ${name.last}`} /></td>
                                                        <td>{name.first} {name.last}</td>
                                                        {/* <td></td> */}
                                                        <td> {email}</td>
                                                        <td>{dob.date} </td>
                                                        <td> {phone}</td>
                                                </tr>
                                        )
                                })
                        ) : (
                                        <> </>
                                )
                        }


                </tbody >





        )
}

export default EmployListItem
