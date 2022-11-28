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
import { fetchJobs } from "../redux/employer/employerjobSlice";

const AllPostedJobs = (props) => {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.employerJob.jobs);
  useEffect(() => {
    if (props.data.length) {
      dispatch(fetchJobs());
    }
  }, []);
  return (
    <Table basic padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Job Title</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Skills Required</Table.HeaderCell>
          <Table.HeaderCell>Experience Required</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {job.length>0 ? job.map((item) => {
          return (
            <Table.Row>
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
              <Table.Cell verticalAlign="middle">
                {item.expRequired}
              </Table.Cell>
              <Table.Cell verticalAlign="middle">
                {item.jobStatus}
              </Table.Cell>
            </Table.Row>
          );
        }):<>No Job Posted yet!</>}
      </Table.Body>
    </Table>
  );
};

export default AllPostedJobs;
