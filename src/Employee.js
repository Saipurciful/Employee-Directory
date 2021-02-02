import React, { Component } from 'react'
import SearchForm from "./component/SearchForm"
import EmployeeTable from "./EmployeeTable"
// import EmployeeListItem from "./EmployListItem"
import API from './utils/API'
import "./index"
// import './App.css'

class Employee extends Component {
    state = {
        users: [{}],
        filterUsers: [{}]
    };
    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ users: res.data.results, filterUsers: res.data.results }))
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const filter = event.target.value;
        const filterLists = this.state.users.filter(user => {
            let values = Object.values(user).join("").toLowerCase()
            return values.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({ filterUsers: filterLists })
    };

    render() {

        // console.log(this.state.users)
        // console.log(this.state.filterUsers)
        return (
            <div>
                <SearchForm

                    handleInputChange={this.handleInputChange}
                />
                <EmployeeTable
                    users={this.state.filterUsers}
                />

            </div>

        );
    }
}

export default Employee
