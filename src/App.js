import React, { Component } from "react";
import Search from "./components/Search/index";
import EmployeeCard from "./components/EmployeeCard/index";
import Title from './components/Title/index'
import Wrapper from './components/Wrapper/index'
import API from "./utils/API";

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
    const filterRes = this.state.result.filter(
      (person) => person.firstName === searchkey
    );

    this.setState({
      result: filterRes,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const value = event.target.value;
    const name = event.target.name;

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

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className="row">
          <table className="table">
            <tr>
              <th scope="col">Photo</th>
              <th>First Name</th>
              <th scope="col">Last Name </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>

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
          </table>
        </div>
      </div>
      </Wrapper>
    );
  }
}

export default SearchResults;
