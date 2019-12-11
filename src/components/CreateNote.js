import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateNote extends Component {

  state = {
    title: '',
    content: '',
    date: new Date(),
    userSelected: '',
    users: [],
    editing: false,
    _id: ''
  }

  async componentDidMount() {
    const res = await axios.get('/api/users');
    
    if (res.data.length > 0) {
      this.setState({
        users: res.data.map((user) => user.username),
        userSelected: res.data[0].username
      })
    }
    console.log(this.props);
    if (this.props.match.params.id) {
      const res = await axios.get("/api/notes/" + this.props.match.params.id);

      this.setState({
        title: res.data.title,
        content: res.data.content,
        date: new Date(res.data.date),
        userSelected: res.data.author,
        _id: res.data._id,
        editing: true
      })
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    
    if (this.state.editing) {
      
      const updateNote = {
        title: this.state.title,
        content: this.state.content,
        author: this.state.userSelected,    
        date: this.state.date
      };
      await axios.put('/api/notes/' + this.state._id, updateNote);
    
    } else {
      
      const newNote = {
        title: this.state.title,
        content: this.state.content,
        author: this.state.userSelected,
        date: this.state.date
      };

      const res = await axios.post('/api/notes/' + this.state._id, newNote);
    }

    window.location.href = '/';
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeDate = date => {
    this.setState({date});
  }

  render() {
    return (
      <div>
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Create a Note</h4>
            {/**SELECT USER */}
            <div className="form group">
              <select 
                className="form-control"
                value={this.state.userSelected}
                onChange={this.onInputChange}
                name="userSelected" 
                required>
                {
                  this.state.users.map((user, id) => 
                  <option key={id} value={user}>
                    {user}
                  </option>
                  )
                }
              </select>
            </div>
                
            <div className="form-group mt-4">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Title"
                  name="title"
                  onChange={this.onInputChange}
                  value={this.state.title}
                  required />                           
            </div>

            <div className="form-group">
                <textarea 
                  name="content"
                  className="form-control"
                  placeholder="Content"
                  onChange={this.onInputChange}
                  value={this.state.content}
                  required>
                
                </textarea>
            </div>
            
            <div className="form-group">
                <DatePicker 
                  className="form-control"
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
            
            </div>
            
            <form onSubmit={this.onSubmit}>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
