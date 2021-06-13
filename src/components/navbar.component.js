import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Bookr Catalog</a>

            <div className="collpase navbar-collapse">
                <ul class="navbar-nav me-auto">
                </ul>
                <a class="btn btn-outline-warning float-end" type="button" href="/add">
                    + Add a Book
                </a>
            </div>
        </div>
      </nav>
    );
  }
}