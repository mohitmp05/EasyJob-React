import React, { useState } from "react";
import { Card, Icon, Image, Button, Label } from "semantic-ui-react";
import Modal from "react-bootstrap/Modal";
import Buttonb from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { applyJob } from "../redux/user/userSlice";
import { toast, ToastContainer } from "react-toastify";

const ApplicantCard = (props) => {
  const [show, setShow] = useState(false);
  
  const handleOnView = () => {
    setShow(true);
  };

  const handleOnClose = () => {
    setShow(false);
  };

  const notify = () => {
    toast.success("Job Applied Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const options = [
    { key: "angular", text: "Angular", value: 1 },
    { key: "css", text: "CSS", value: 2 },
    { key: "design", text: "Graphic Design", value: 3 },
    { key: "html", text: "HTML", value: 4 },
    { key: "javascript", text: "Javascript", value: 5 },
    { key: "node", text: "NodeJS", value: 6 },
    { key: "python", text: "Python", value: 7 },
    { key: "react", text: "React", value: 8 },
    { key: "ui", text: "UI Design", value: 9 },
  ];

  return (
    <>
      <Card style={{ padding: "10px", width: "80%", marginLeft: "10%" }}>
        <Card.Content>
          <Card.Header>{props.applicants.fullName}</Card.Header>
          <div style={{ marginTop: "5px", fontWeight: "600" }}>
            {props.applicants.aadharNo}
          </div>
          <div style={{ color: "#71797E", fontWeight: "600" }}>
            <div style={{ backgroundColor: "transaparent", marginTop: "1px" }}>
              <Icon name="briefcase" />
              <span style={{ fontSize: "12px", paddingLeft: "3px" }}>
                {props.applicants.yearOfExperience} Yrs
              </span>
            </div>
          </div>

          <div style={{ color: "#71797E", fontWeight: "600" }}>
            <div
              style={{
                backgroundColor: "transaparent",
                marginTop: "1px",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <Icon name="file alternate outline" />
              <span
                style={{
                  fontSize: "12px",
                  paddingLeft: "3px",
                }}
              >
                {props.applicants.contactNo}
              </span>
            </div>
          </div>

          <Card.Description style={{ marginTop: "15px" }}>
            {props.applicants.skills.map((itm) => {
              return options.map((item) => {
                return item.value === itm ? (
                  <Label
                    as="a"
                    content={item.text}
                    style={{ paddingTop: "5px" }}
                  />
                ) : null;
              });
            })}

            <Button basic color="green" floated="right" onClick={handleOnView}>
              View
            </Button>
          </Card.Description>
        </Card.Content>
      </Card>

      {/* <Modal show={show} onHide={handleOnClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Job Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ padding: "10px", width: "80%", marginLeft: "10%" }}>
            <Card.Content>
              <Card.Header>{props.applicants.jobTitle}</Card.Header>
              <div style={{ marginTop: "5px", fontWeight: "600" }}>
                {props.applicants.companyName}
              </div>
              <div style={{ color: "#71797E", fontWeight: "600" }}>
                <div
                  style={{ backgroundColor: "transaparent", marginTop: "1px" }}
                >
                  <Icon name="briefcase" />
                  <span style={{ fontSize: "12px", paddingLeft: "3px" }}>
                    {props.applicants.expRequired} Yrs
                  </span>
                </div>
              </div>

              <div style={{ color: "#71797E", fontWeight: "600" }}>
                <div
                  style={{
                    backgroundColor: "transaparent",
                    marginTop: "1px",
                    overflow: "clip",
                  }}
                >
                  <Icon name="file alternate outline" />
                  <span
                    style={{
                      fontSize: "12px",
                      paddingLeft: "3px",
                    }}
                  >
                    {props.applicants.jobDescription}
                  </span>
                </div>
              </div>

              <Card.Description style={{ marginTop: "15px" }}>
                {props.applicants.skillsRequired.map((itm) => {
                  return options.map((item) => {
                    return item.value === itm ? (
                      <Label
                        as="a"
                        content={item.text}
                        style={{ paddingTop: "5px" }}
                      />
                    ) : null;
                  });
                })}
              </Card.Description>
            </Card.Content>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Buttonb variant="primary">
            Shortlist
          </Buttonb>
        </Modal.Footer>
      </Modal> */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        theme="light"
      />
    </>
  );
};

export default ApplicantCard;
