import React from "react";
import './style.css'

function EmployeeCard(props) {
  return (
    <table>
      <tbody>
    <tr>
      <th className="img-container" scope="row">
        <img alt={props.firstName} src={props.picture} />
      </th>

      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
    </tbody>
    </table>
  );
}

export default EmployeeCard