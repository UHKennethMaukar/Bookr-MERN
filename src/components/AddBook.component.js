import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

// WIP
export default class AddBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            year: '',
            description: '',
            imageURL: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const entry = {
            title: this.state.title,
            year: this.state.year,
            description: this.state.description,
            imageURL: this.state.imageURL
        };

        axios
            .post('http://localhost:5000/books/add', entry)
            .then(res => {
                this.setState({
                   title: '',
                   year: 2021,
                   description: '',
                   imageURL: '',
                });
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error: " + err);
            })
    };

    render() {
        return (
            <div className="AddBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <br/>
                        <p className="lead text-center">Add a new book</p>

                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="title">Title</label>
                                <input
                                    type='text'
                                    placeholder='Required'
                                    name='title'
                                    className='form-control'
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                            <label htmlFor="title">Published Year</label>
                            <input
                                type='number'
                                placeholder='Required'
                                name='year'
                                className='form-control'
                                value={this.state.year}
                                onChange={this.onChange}
                            />
                            </div>
                            <br />

                            <div className='form-group'>
                            <label htmlFor="title">Description of Book</label>
                            <input
                                type='text'
                                placeholder='Required'
                                name='description'
                                className='form-control'
                                value={this.state.description}
                                onChange={this.onChange}
                            />
                            </div>
                            <br />

                            <div className='form-group'>
                            <label htmlFor="title">Image URL of Book Cover</label>
                            <input
                                type='text'
                                placeholder='(Optional)'
                                name='imageURL'
                                className='form-control'
                                value={this.state.imageURL}
                                onChange={this.onChange}
                            />
                            </div>
                            <br />

                            <div className='row'>
                                <div className="col-md-24">
                                    <button type="submit" className="btn btn-outline-success btn-lg btn-block">
                                        Submit
                                    </button>
                                    <a class="btn btn-outline-danger float-end" type="button" href="/">
                                        Cancel
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}