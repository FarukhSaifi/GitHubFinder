import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "234252",
        firstName: "Farukh",
        lastName: "Saifi",
        email: "Farukh@mail.com",
        phone: "9810844673",
        balance: "5000"
      },
      {
        id: "6789",
        firstName: "sam",
        lastName: "Saifi",
        email: "sameer@mail.com",
        phone: "9810844673",
        balance: "300.97"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <h2>
                <i className="fas fa-users" /> Clients
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>
          <table className="table table-spriped">
            <thead className="thead-inverse">
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th>.</th>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`client/${client.id}`}
                      className="btn btn-secondry btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
