import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


import BookEntry from './BookEntry.component';

export default class BookCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/books')
            .then(res => {
                this.setState({
                    books: res.data
                })
            })
            .catch(err => {
                console.log('Error: ' + err);
            })
    }

    render() {
        const books = this.state.books;
        console.log("Book: " + books);
        let bookCatalog;
        let filteredBooks = this.state.books.filter(
            (book) => {
                return book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        );

        if(!books) {
            bookCatalog = "No books added yet.";
        } else {
            bookCatalog = filteredBooks.map((book, k) =>
                <BookEntry book = {book} key = {k} />
                );
        }

        return (
            <div className="BookCatalog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <input className="form-control mr-sm-2" type="text" placeholder="Search by Title" 
                                value={this.state.search} 
                                onChange={this.updateSearch.bind(this)}/>
                            <hr />
                        </div>    
                    </div>

                    <div className="catalog">
                        {bookCatalog}
                    </div>
                    
                </div>
            </div>
        )
    }
}