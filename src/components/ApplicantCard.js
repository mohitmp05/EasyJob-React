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
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.user.username);
  const [job, setJob] = useState({
    jobId: 0,
    username: username,
    jobTitle: "",
    companyName:"",
    jobDescription: "",
    skillsRequired: [],
    applyStatus: false,
  });

  const handleOnView = () => {
    setShow(true);
    const newJobs = () => {
        return {
          ...job,
          jobId: props.recommendedJobs.jobId,
          jobTitle: props.recommendedJobs.jobTitle,
          companyName: props.recommendedJobs.companyName,
          jobDescription: props.recommendedJobs.jobDescription,
          skillsRequired: props.recommendedJobs.skillsRequired,
          applyStatus: false,
        };
      };
      setJob(newJobs);
      console.log(job)
  };

  const handleOnApply = () => {
    dispatch(applyJob(job));
    notify();
    setShow(false);
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

  return (
    <>
      <Card style={{ padding: "10px", width: "80%", marginLeft: "10%" }}>
        <Card.Content>
          <Card.Header>{props.recommendedJobs.jobTitle}</Card.Header>
          <div style={{ marginTop: "5px", fontWeight: "600" }}>
            {props.recommendedJobs.companyName}
          </div>
          <div style={{ color: "#71797E", fontWeight: "600" }}>
            <div style={{ backgroundColor: "transaparent", marginTop: "1px" }}>
              <Icon name="briefcase" />
              <span style={{ fontSize: "12px", paddingLeft: "3px" }}>
                {props.recommendedJobs.expRequired} Yrs
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
                {props.recommendedJobs.jobDescription}
              </span>
            </div>
          </div>

          <Card.Description style={{ marginTop: "15px" }}>
            <Label
              as="a"
              content="Mail"
              icon="mail"
              style={{ paddingTop: "5px" }}
            />
            <Label
              as="a"
              content="Mail"
              icon="mail"
              style={{ paddingTop: "5px" }}
            />
            <Label
              as="a"
              content="Mail"
              icon="mail"
              style={{ paddingTop: "5px" }}
            />

            <Button basic color="green" floated="right" onClick={handleOnView}>
              View
            </Button>
          </Card.Description>
        </Card.Content>
      </Card>

      <Modal show={show} onHide={handleOnClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Job Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ padding: "10px", width: "80%", marginLeft: "10%" }}>
            <Card.Content>
              <Card.Header>{props.recommendedJobs.jobTitle}</Card.Header>
              <div style={{ marginTop: "5px", fontWeight: "600" }}>
                {props.recommendedJobs.companyName}
              </div>
              <div style={{ color: "#71797E", fontWeight: "600" }}>
                <div
                  style={{ backgroundColor: "transaparent", marginTop: "1px" }}
                >
                  <Icon name="briefcase" />
                  <span style={{ fontSize: "12px", paddingLeft: "3px" }}>
                    {props.recommendedJobs.expRequired} Yrs
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
                    {props.recommendedJobs.jobDescription}
                  </span>
                </div>
              </div>

              <Card.Description style={{ marginTop: "15px" }}>
                <Label
                  as="a"
                  content="Mail"
                  icon="mail"
                  style={{ paddingTop: "5px" }}
                />
                <Label
                  as="a"
                  content="Mail"
                  icon="mail"
                  style={{ paddingTop: "5px" }}
                />
                <Label
                  as="a"
                  content="Mail"
                  icon="mail"
                  style={{ paddingTop: "5px" }}
                />
              </Card.Description>
            </Card.Content>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Buttonb variant="primary" onClick={handleOnApply}>
            Apply
          </Buttonb>
        </Modal.Footer>
      </Modal>
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
