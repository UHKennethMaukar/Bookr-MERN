import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

export default class ViewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/books/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    book: res.data
                })
            })
            .catch(err => {
                console.log("Error: " + err);
            })       
    };

    // To-Do: Add book image placeholder
    render() {
        const book = this.state.book;
        let BookEntry = <div>
            <p className="aligncenter">
                <img src={ book.imageURL } className="cover" alt="Book cover"/>
            </p>
            
            <table className = "table table-hover table-dark">
                <tbody>
                    <tr>
                        <td>Published</td>
                        <td>{ book.year }</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{ book.description }</td>
                    </tr>
                </tbody>
            </table>
        </div>

    return (
        <div className="ViewBook">
          <div className="container">
            <div className="row">
              <br />
              <div className="col-md-8 m-auto">
                <h2 className="display-4 text-center">{ book.title }</h2>
                <hr /> <br />
              </div>
            </div>
            <div>
              { BookEntry }
            </div>
          </div>
        </div>
      );
    }
}