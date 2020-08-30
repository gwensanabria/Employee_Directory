import React from "react";
import './style.css'

function EmployeeCard(props) {
  return (
    <table>
      <tbody>
    <tr>
      <td className="img-container">
        <img alt={props.firstName} src={props.picture} />
      </td>

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