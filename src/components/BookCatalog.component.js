import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

import BookEntry from './BookEntry.component'; // Books will be fetched & mapped from BookEntry component

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

        if(!books) {
            bookCatalog = "No books added yet.";
        } else {
            bookCatalog = books.map((book, k) =>
                <BookEntry book = {book} key = {k} />
                );
        }

        return (
            <div className="BookCatalog">
                <div className="container">
                    <div className="catalog">
                        {bookCatalog}
                    </div>
                    
                </div>
            </div>
        )
    }
}