import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item, Button, Icon, Label, Header } from "semantic-ui-react";
import { fetchRecommendedJobs } from "../redux/job/jobSlice";
import JobCard from "./JobCard";

const AllJobs = () => {

    const dispatch = useDispatch();
    const recommendedJobs= useSelector((state)=>state.job.recommendedJobs)

    useEffect(()=>{
        dispatch(fetchRecommendedJobs())
    },[])
  return (
    <div
      style={{
        overflowY: "scroll",
        maxHeight: "350px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
        {recommendedJobs.map((items)=>{
            return <JobCard recommendedJobs={items}/>
        })}
    </div>
  );
};

export default AllJobs;
