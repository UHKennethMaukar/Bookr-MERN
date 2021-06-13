import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      year: '',
      description: '',
      imageURL: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/books/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          year: res.data.year,
          description: res.data.description,
          imageURL: res.data.imageURL,
        })
      })
      .catch(err => {
        console.log("Error: " + err);
      })
  };
  onDeleteClick = e => {
    axios
      .delete('http://localhost:5000/books/' + this.props.match.params.id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error: " + err);
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      year: this.state.year,
      description: this.state.description,
      imageURL: this.state.imageURL
    };

    axios
      .post('http://localhost:5000/books/edit/' + this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/view/' + this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error: " + err);
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
                <br />
              <p className="lead text-center">
                  Edit Details for {this.state.title}
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />
            <br />


            <div className='form-group'>
            <label htmlFor="Year">Published Year</label>
              <input
                type='number'
                placeholder='Year'
                name='year'
                className='form-control'
                value={this.state.year}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>
            <br />
            
            <div className='form-group'>
            <label htmlFor="imageURL">Book Cover URL</label>
              <input
                type='url'
                placeholder='Insert URL of cover image'
                name='imageURL'
                className='form-control'
                value={this.state.imageURL}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className="row">
                <div className="col-md-24">
                    <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block float-end" onClick={this.onDeleteClick}>Delete Book</button><br />
                </div>
            </div>
                
            </form>

          </div>
        </div>
      </div>
    );
  }
}