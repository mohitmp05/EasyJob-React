import React, { useEffect } from "react";
import axisLogo from "../images/axis-logo.jpg";
import cognizantLogo from "../images/cognizant-logo.jpg";
import deliotteLogo from "../images/deloitte-logo.jpg";

import {
  Table,
  Icon,
  Button,
  Header,
  Image,
  Rating,
  Label,
} from "semantic-ui-react";
import { fetchAppliedJobs } from "../redux/job/jobSlice";
import { useDispatch, useSelector } from "react-redux";

const AppliedJobs = (props) => {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.userJob);
  useEffect(() => {
    if (props.data.length) {
      dispatch(fetchAppliedJobs(props.data));
    }
  }, []);
  return (
    <Table basic padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Company</Table.HeaderCell>
          <Table.HeaderCell>Profile</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Skills Required</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {job.map((item) => {
          return (
            <Table.Row>
              <Table.Cell verticalAlign="middle">
                <Header as="h2" textAlign="center">
                  <Image src={axisLogo} rounded size="huge" />
                </Header>
              </Table.Cell>
              <Table.Cell singleLine verticalAlign="middle">
                {item.jobTitle}
              </Table.Cell>
              <Table.Cell verticalAlign="middle">
                {item.jobDescription}
              </Table.Cell>
              <Table.Cell verticalAlign="middle">
                <Label style={{ margin: "1px" }}>Java</Label>
                <Label style={{ margin: "1px" }}>Spring Boot</Label>
                <Label style={{ margin: "1px" }}>AWS</Label>
              </Table.Cell>
              <Table.Cell positive textAlign="right" verticalAlign="middle">
                Applied
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default AppliedJobs;
