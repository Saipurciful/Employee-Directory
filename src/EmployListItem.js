import React from 'react'


function EmployListItem({ users }) {

        function formatDate(date) {
                var d = new Date(date),
                        month = '' + (d.getMonth() + 1),
                        day = '' + d.getDate(),
                        year = d.getFullYear();

                if (month.length < 2)
                        month = '0' + month;
                if (day.length < 2)
                        day = '0' + day;

                return [year, month, day].join('-');
        }
        console.log(users)
        return (
                <tbody>

                        {users[0] !== undefined && users[0].name !== undefined ? (
                                users.map(({ name, picture, phone, email, dob, login }) => {
                                        return (
                                                <tr key={login.uuid}>
                                                        <td><img src={picture.medium} alt={`profile image for ${name.first} ${name.last}`} /></td>
                                                        <td>{name.first} {name.last}</td>
                                                        {/* <td></td> */}
                                                        <td> {email}</td>
                                                        <td>{formatDate(dob.date)} </td>
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
