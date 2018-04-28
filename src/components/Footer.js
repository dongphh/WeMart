import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import Radium from 'radium';
import {Button, Form, TextField} from 'ic-snacks';


class Footer extends Component {
  constructor(){
    super();

    this.handleShowContactUsModal = this.handleShowContactUsModal.bind(this);
    this.handleCloseContactUsModal = this.handleCloseContactUsModal.bind(this);

    this.state = {
      contactUsModal: false,
    };


  }

  handleShowContactUsModal() {
    this.setState({contactUsModal: true});
  }


  handleCloseContactUsModal() {
    this.setState({contactUsModal: false});
  }

  contactUsModal(){
    const textarea={
      base:{
        position: "relative",
        padding: '10px',
        width: "100%",
        height: "100px",
        border: "1px solid #BDBDBD",
        borderRadius: "4px",
        resize: "none",
        ':focus': {
          border: "1px solid rgb(211, 7, 7)",
          outline: "0",
        }
      }
    }

    return(
      <div>
        <Modal show={this.state.contactUsModal} onHide={this.handleCloseContactUsModal}>
          <Modal.Header>
            <div style={{ float: 'right'}}>
                  <Button onClick={this.handleCloseContactUsModal} snacksStyle="secondary" style={{height:"30px"}}>Close</Button>
            </div>
            <h1 style={{marginTop: '2px'}}>Email Us</h1>
            <div>We'll get back to you soon</div>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(model) => ( console.log(model) ) } serverErrors={{}} formProps={{}}>

              <div style={{marginBottom: '10px'}}>
                <TextField
                  name="Subject"
                  floatingLabelText="Subject"
                  hintText="Enter the subject of your message"
                  validations={{isSubject: null, isLength: {min: 3, max: 50}}}
                  validationErrorText="Please enter a subject"
                  fullWidth
                  required
                  />
              </div>

              <div style={{marginBottom: '10px'}}>
                <TextField
                  name="email"
                  type="email"
                  floatingLabelText="Email"
                  hintText="Enter your email address"
                  validations={{isEmail: null, isLength: {min: 3, max: 50}}}
                  validationErrorText="Please enter a valid email"
                  fullWidth
                  required
                  />
              </div>

              <div style={{marginBottom: '10px'}}>
                <label>Your Message</label>
                <textarea
                  className = "message"
                  placeholder="Please write your message"
                  style={textarea.base}
                  required
                  ></textarea>
              </div>

              <div style={{margin:"auto", width:"70%", paddingTop:"10px", justifyContent: "center"}}>
                  <Button type="submit" className="primary" style={{height:"40px", width: '100%', display: 'inital'}}>Submit</Button>
              </div>

            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }




  render() {

    const Links={
      color: "#D30707",
      cursor:'pointer',
      margin:"5px"
    }

    const Spacing={
      paddingTop: "15px",
      paddingBottom: "10px",
      textAlign:"center"
    }

    const footerStyle={

      paddingTop: "10px",
      width: "100%",
      color: "#D30707",
      textAlign: 'center',
      zIndex: "10",
    };

    const footerPosition ={
      position: "relative",
      bottom: "0",
      width: "100%",
      height: "auto",
      backgroundColor: '#F5F5F5',
      overflow: "visible",
      clear: 'both',
    };

    const footerLinksContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    };

    return (

      <div style={footerPosition}>
        <div style={footerStyle}>
          <div>
            <div style={footerLinksContainer}>

              <Link to={"./AboutUs"} style={Links}>About Us</Link>

              <a onClick={this.handleShowContactUsModal}  style={Links}>Contact Us</a>

              <Link to={"./Locations"} style={Links}>Locations</Link>

              <Link to={"./Privacy"} style={Links}>Privacy</Link>

              <Link to={"./Terms"} style={Links}>Terms</Link>&nbsp;&nbsp;&nbsp;&nbsp;

              </div>

              <div style={Spacing}>
                Copyright © {new Date().getFullYear()} 
                <a href={"https://github.com/timroesner/WeMart"} style={Links}>WeMart</a> Inc.
              </div>

            </div>
            {this.contactUsModal()}
          </div>
        </div>


      );

    }
  }

  export default withRouter(Radium(Footer));
