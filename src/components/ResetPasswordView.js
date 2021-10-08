import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Row from 'reactstrap/lib/Row';
import { Link, navigate } from 'gatsby';
import { ValidationErrors } from './ValidationError'
import '../custom.css'

export class ResetPasswordView extends Component {
  static displayName = ResetPasswordView.name;

  constructor(props){
    super(props);
    this.state = { errors: [], confirmpassword: "", password: ""}

    this.tryLogin = this.tryLogin.bind(this)
    this.handleInputEvent = this.handleInputEvent.bind(this)
  }

  tryLogin (event) {
    event.preventDefault();
    let errors = [];
    let password = this.state.password;
    let confirmpassword = this.state.confirmpassword;

    if(password === "") errors.push('Password is required');
    if(password.length < 7) errors.push('Password must be at least 7 characters');

    if(errors.length > 0){
      this.setState({...this.state, errors: errors})
      return
    }

    navigate("/login")
  }

  isEmail(email) {
    return new RegExp(".+@.+\..+").test(email)
  }

  handleInputEvent(event) {
    let fieldName = event.target.name
    if(fieldName === "confirmpassword") 
      this.setState({confirmpassword: event.target.value})
    else if(fieldName === "password")
      this.setState({password: event.target.value})
    else
      return
  }

  render () {
    return (
      <div id="login-form-container">

        <div id="login-form">
        
            <Row>
              <Col md={4}></Col>

              <Col md={4} className="form-wrapper">

                <div className="text-center">
                  <img style={{height:'80px'}} src="../../images/solidrocklogo.png" alt="logo" />
                </div>

                <hr style={{borderColor:'#d671c3'}} />

                <p></p>
                <Form>
                  <ValidationErrors errors={this.state.errors} />

                  <FormGroup>
                    <label htmlFor="password">New password:</label>
                    <Input type="password" name="password" id="password" 
                           placeholder="password"
                           defaultValue={this.state.password}
                           onChange={this.handleInputEvent} />
                  </FormGroup>
<br/>
                  <FormGroup>
                    <label htmlFor="confirmpassword">Confirm new password:</label>
                    <Input type="password" name="confirmpassword" id="confirmpassword" 
                           placeholder="confirm password"
                           defaultValue={this.state.confirmpassword}
                           onChange={this.handleInputEvent} />
                  </FormGroup>

                  <br />
                  <Button onClick={this.tryLogin} className="submit-button">Reset Password</Button>

                </Form>

                <br />
                <Link to='/login'>Login</Link>

                <p></p>
              </Col>

              <Col md={4}></Col>
            </Row>        

        </div>

        <div className="footer-content">
          <div>&copy; 2021</div>
          <div>
          Head office: 24 Adeola Odeku, Victoria Island Lagos. +2348023929392<br />
          PH office: 20A Hunponu Wosu Str Lekki. 09030009036<br />
          </div>
        </div>

      </div>
      
    );
  }
}

export default ResetPasswordView