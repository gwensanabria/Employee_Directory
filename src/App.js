import React, { Component } from "react";
import Search from "./components/Search/index";
import EmployeeCard from "./components/EmployeeCard/index";
import Title from './components/Title/index'
import Wrapper from './components/Wrapper/index'
import API from "./utils/API";
import './style.css'

class SearchResults extends Component {
  state = {
    result: [],
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: "",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        this.setState({
          result: res.data.results.map((emp, i) => ({
            firstName: emp.name.first,
            lastName: emp.name.last,
            picture: emp.picture.large,
            email: emp.email,
            phone: emp.phone,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  filterEmployees = (searchkey) => {
    console.log(searchkey);
    console.log(this.state.result);

    const filterResult = this.state.result.filter(
      (person) => person.firstName === searchkey
    );

    this.setState({
      result: filterResult,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const value = event.target.value;
    const name = event.target.name;
    // console.log(value)
    // console.log(name)

    this.filterEmployees(value);
    this.setState({
      [name]: value,
    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
  };

  handleInputChange = (event) => {
    event.preventDefault();

    const value = event.target.value;
    const name = event.target.name;
    // console.log(value)
    // console.log(name)

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
      <Wrapper>
        <Title>Employee Directory</Title>
      </Wrapper>

          <div className="col-md-6">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>


        <div className="row col-md-12">
            <table>
              <thead>
                <tr>
              <th style={{ width: '20%', textAlign: 'center' }}>Photo</th>
              <th style={{ width: '20%', textAlign: 'center' }}>First Name</th>
              <th style={{ width: '20%', textAlign: 'center' }}>Last Name </th>
              <th style={{ width: '20%', textAlign: 'center' }}>Email</th>
              <th style={{ width: '20%', textAlign: 'center' }}>Phone</th>
              </tr>
              </thead>
              </table>
              {[...this.state.result].map((item) => (
              <EmployeeCard
                picture={item.picture}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />
            ))}
        </div>
      </div>


    );
  }
}

export default SearchResults;
