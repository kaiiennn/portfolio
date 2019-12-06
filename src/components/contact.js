import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


class Contact extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => { //to capture the value entered in each individual field
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault() //prevent refresh on click

    const { name, email, message } = this.state

    const form = await axios.post('/api/form', {
      name, //it is equivalent to name: name
      email,
      message
    })
  }

  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}> 
            <Form onSubmit={this.handleSubmit} style={{width: '600px'}}>
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="name">Message:</Label>
                <Input
                  type="textarea"
                  name="message"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <Button>Submit</Button>

            </Form>

          </Cell>
          <Cell col={6}>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
