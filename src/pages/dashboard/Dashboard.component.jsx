import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.style.scss';

export class Dashboard extends Component {
  render() {
    return (
      <div className="Dahsboard">
        <header className="Dashboard--header">
          <h2>Dash</h2>
          <div className="Dashboard--data">
            <div className="Dashboard--infected">
              <h3>Global Infected</h3>
            </div>
            <div className="Dashboard--toll">
              <h3>Global Deaths</h3>
            </div>
          </div>
          <div className="Dashboard--reports">

          </div>

          <Link to='/newReport'>Create Report</Link>

        </header>
      </div>
    )
  }
}

export default Dashboard
