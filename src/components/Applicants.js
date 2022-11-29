import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item, Button, Icon, Label, Header } from "semantic-ui-react";
import { fetchRecommendedJobs } from "../redux/job/jobSlice";
import ApplicantCard from "./ApplicantCard";
import JobCard from "./JobCard";

const Applicants = () => {

    const dispatch = useDispatch();
    const recommendedJobs= useSelector((state)=>state.job.recommendedJobs)

    useEffect(()=>{
        dispatch(fetchRecommendedJobs())
    },[])
  return (
    <div>
       <Header
        as="h2"
        style={{ width: "100%", padding: "10px", alignItems: "center" }}
      >
        <Header.Content>View Applicants</Header.Content>
        <hr />
      </Header>
    <div
      style={{
        overflowY: "scroll",
        maxHeight: "350px",
        paddingTop: "10px",
      }}
    >
        {recommendedJobs.map((items)=>{
            return <ApplicantCard recommendedJobs={items}/>
        })}
    </div>
    </div>
  );
};

export default Applicants;
