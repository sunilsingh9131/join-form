import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import User from "../images/avatar1.png";
import ImageUploader from "react-images-upload";

export default class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      sex: "",
      matrimony: "",
      mobileno: "",
      dateofjoining: "",
      permanentaddress: "",
      presentaddress: "",
      photo: "",
      firstnameError: "",
      lastnameError: "",
      dobError: "",
      emailError: "",
      sexError: "",
      matrimonyError: "",
      mobilenoError: "",
      dateofjoiningError: "",
      photoError: "",
    };

    this.handleAll1 = this.handleAll1.bind(this);
  }

  handleAll1 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  valid() {
    var phoneno = /^\d{10}$/;
    if (this.state.firstname.value == "") {
      this.setState({ firstnameError: "Firstname is Empty" });
    }

     if (this.state.lastname.value == "") {
      this.setState({ lastnameError: "Lastname is Empty" });
    }

     if (!this.state.email.includes("@")) {
      this.setState({ emailError: "Email is empty" });
    }

     if (this.state.sex.value == "") {
      this.setState({ sexError: "please choose your gender" });
    }

     if (this.state.matrimony.value == "") {
      this.setState({ matrimonyError: "choose your marital status" });
    } else {
      this.setState({ matrimonyError: "" });
    }

    if (!this.state.mobileno.match(phoneno)) {
      this.setState({ mobilenoError: "" });
    }

    if (this.state.dob.value == "") {
      this.setState({ dobError: "Date is missing" });
    }

    if (this.state.dateofjoining.value == "") {
      this.setState({ dateofjoiningError: "Date is missing" });
    }

    if (this.state.photo.value == "") {
      this.setState({ photoError: "Upload Image" });
    }
  }

  submit = (e) => {
    e.preventDefault();

    if (this.valid()) {
      alert("form has been submitted");
      this.setState({
        firstnameError: "",
        lastnameError: "",
        dobError: "",
        emailError: "",
        sexError: "",
        matrimonyError: "",
        mobilenoError: "",
        dateofjoiningError: "",
        photoError: "",
      });
    } else {
      var data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        dob: this.state.dob,
        email: this.state.email,
        sex: this.state.sex,
        matrimony: this.state.matrimony,
        mobileno: this.state.mobileno,
        dateofjoining: this.state.dateofjoining,
        permanentaddress: this.state.permanentaddress,
        presentaddress: this.state.presentaddress,
      };
      console.log("check data value========", data);
      this.props.steponetotwo();
    }

    // this.props.steponetotwo();
  };

  

  // Base-64 function

  next = (event) => {
    console.log("HHHHhhhhh");
    this.setState({ [event.target.name]: event.target.value });
    try {
      let files = event.target.files; // image will come at this place
      let reader = new FileReader(); // Reader will read the image
      reader.readAsDataURL(files[0]); // now it is converting the image into base-64
      reader.onload = (e) => {
        // when it gets any event on loading, it shows the result, and set it in a state.
        console.log(e.target.result);
        this.setState({ userImage: e.target.result });
      };
    } catch (e) {}
  };

  render() {
    // console.log(this.state);

    return (
      <>
        <section>
          <Container>
            <h2 className="mt-5">Personal Details</h2>
            <Form >
              <Row className="mt-5">
                <Col className="col-md-6">
                  {/* <div className="firsttwo"> */}
                  <div>
                    <p>First Name</p>

                    <input
                      type="text"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.handleAll1}
                      // onChange={(event) => {
                      //   this.setState({ firstname: event.target.value });
                      // }}
                      placeholder="Firstname"
                    />
                    <p>{this.state.firstnameError}</p>

                    <p>Last Name</p>
                    <input
                      type="text"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.handleAll1}
                      // onChange={(event) => {
                      //   this.setState({ lastname: event.target.value });
                      // }}
                      placeholder="Lastname"
                    />
                    <p>{this.state.lastnameError}</p>

                    <p>Date Of Birth</p>
                    <input
                      type="date"
                      name="dob"
                      value={this.state.dob}
                      onChange={this.handleAll1}
                      size="10"
                      // onChange={(event) => {
                      //   this.setState({ dob: event.target.value });
                      // }}
                    />
                    <p>{this.state.dobError}</p>

                    <p>E-mail Address</p>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleAll1}
                      // onChange={(event) => {
                      //   this.setState({ email: event.target.value });
                      // }}
                      placeholder="e-mail"
                    />
                    <p>{this.state.emailError}</p>
                  </div>
                </Col>

                <Col className="col-md-3 offset-md-1">
                  <div className="avatar-wrapper offset-md-6">
                    <div className="upload-button">
                      <img
                        src={this.state.userImage ? this.state.userImage : User}
                        alt=""
                      />
                    </div>
                    <input
                      className="file-upload"
                      type="file"
                      value={this.state.photo}
                      name="photo"
                      onChange={this.next}
                      imgExtension={[".jpg", ".gif", ".png", ".gif", ".pdf"]}
                      // onChange={(event) => {
                      //   this.setState({ photo: event.target.value });
                      // }}
                    />

                    {/* <ImageUploader
                      withIcon={false}
                      withPreview={false}
                      label=""
                      buttonText=""
                      onChange={this.onDrop}
                      imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                      maxFileSize={1048576}
                      fileSizeError=" file size is too big"
                    /> */}
                    <p>{this.state.photoError}</p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="col-md-2">
                  <p>Sex</p>
                </Col>
                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="sex"
                        value="male"
                        onChange={(e) => this.setState({ sex: e.target.value })}
                        // onChange={(event) => {
                        //   this.setState({ sex: event.target.value });
                        // }}
                      />
                      Male
                    </label>
                  </div>
                </Col>

                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="sex"
                        value="female"
                        onChange={(e) => this.setState({ sex: e.target.value })}
                        // onChange={(event) => {
                        // onChange={this.handleAll1}
                        // onChange={(event) => {
                        //   this.setState({ sex: event.target.value });
                        // }}
                      />
                      Female
                    </label>
                  </div>
                  <div>
                    <p>{this.state.sexError}</p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="col-md-2">
                  <p>Matrimony</p>
                </Col>

                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="matrimony"
                        value="married"
                        onChange={() => this.setState({ matrimony: "married" })}

                        // onChange={this.marriedinput}
                        // onChange={(event) => {
                        //   this.setState({ matrimony: event.target.value });
                        // }}
                      ></input>
                      Married
                    </label>
                  </div>
                </Col>

                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="matrimony"
                        value="single"
                        onChange={() => this.setState({ matrimony: "single" })}
                        // onChange={(event) => {
                        //   this.setState({ matrimony: event.target.value });
                        // }}
                      ></input>
                      Single
                    </label>
                  </div>
                </Col>
                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="matrimony"
                        value="divorced"
                        onChange={() =>
                          this.setState({ matrimony: "divorced" })
                        }
                        // onChange={(event) => {
                        //   this.setState({ matrimony: event.target.value });
                        // }}
                      ></input>
                      Divorced
                    </label>
                  </div>
                  <div>
                    <p>{this.state.matrimonyError}</p>
                  </div>
                </Col>
              </Row>
              {this.state.matrimony == "married" ? (
                <Row>
                  <Col>
                    <p>Mobile No.</p>
                    <input
                      type="number"
                      name="mobileno"
                      value={this.state.mobileno}
                      onChange={this.handleAll1}
                      // onChange={(event) => {
                      //   this.setState({ mobileno: event.target.value });
                      // }}
                      placeholder="Enter Number"
                    />
                    <p>{this.state.mobilenoError}</p>
                  </Col>
                </Row>
              ) : null}

              <Row>
                <Col>
                  <p>Mobile No.</p>
                  <input
                    type="number"
                    name="mobileno"
                    value={this.state.mobileno}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ mobileno: event.target.value });
                    // }}
                    placeholder="Enter Number"
                  />
                  <p>{this.state.mobilenoError}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Date Of Joining</p>
                  <input
                    type="date"
                    name="dateofjoining"
                    value={this.state.dateofjoining}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ dateofjoining: event.target.value });
                    // }}
                  />
                  <p>{this.state.dateofjoiningError}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Present Address</p>
                  <textarea
                    name="presentaddress"
                    value={this.state.presentaddress}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ presentaddress: event.target.value });
                    // }}
                  ></textarea>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Permanent Address</p>
                  <textarea
                    name="permanentaddress"
                    value={this.state.permanentaddress}
                    onChange={this.handleAll1}
                    // onChange={(event) => {
                    //   this.setState({ permanentaddress: event.target.value });
                    // }}
                  ></textarea>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col className="text-center">
                  <button type="submit" onClick={this.submit}>Next</button>
                </Col>
              </Row>
            </Form>
          </Container>
        </section>
      </>
    );
  }
}
