import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Divider,
  Dropdown,
  Form,
  Header,
  Icon,
} from "semantic-ui-react";
import { fetchProfile } from "../redux/userProfile/userProfileSlice";

const PersonalInfo = (props) => {
  const options = [
    { key: "angular", text: "Angular", value: "angular" },
    { key: "css", text: "CSS", value: "css" },
    { key: "design", text: "Graphic Design", value: "design" },
    { key: "ember", text: "Ember", value: "ember" },
    { key: "html", text: "HTML", value: "html" },
    { key: "ia", text: "Information Architecture", value: "ia" },
    { key: "javascript", text: "Javascript", value: "javascript" },
    { key: "mech", text: "Mechanical Engineering", value: "mech" },
    { key: "meteor", text: "Meteor", value: "meteor" },
    { key: "node", text: "NodeJS", value: "node" },
    { key: "plumbing", text: "Plumbing", value: "plumbing" },
    { key: "python", text: "Python", value: "python" },
    { key: "rails", text: "Rails", value: "rails" },
    { key: "react", text: "React", value: "react" },
    { key: "repair", text: "Kitchen Repair", value: "repair" },
    { key: "ruby", text: "Ruby", value: "ruby" },
    { key: "ui", text: "UI Design", value: "ui" },
    { key: "ux", text: "User Experience", value: "ux" },
  ];

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile.userProfile);
  const [isVisible, setIsVisible] = useState(true);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    aadharNo: "",
    college: "",
    contactNo: "",
    highestQualification: "",
    skills: "",
    yearOfExperience: "",
    pastEmployer: "",
    address: "",
  });

  useEffect(() => {
    if (props.data.length) {
      dispatch(fetchProfile(props.data));
    }
  }, []);

  const handleOnUpdate = () => {
    console.log(userDetails);
  };

  const handleOnEdit = () => {
    setIsVisible(false);
    const newUserDetails = () => {
      return {
        ...userDetails,
        fullName: userProfile.fullName,
        aadharNo: userProfile.aadharNo,
        college: userProfile.college,
        contactNo: userProfile.contactNo,
        address: userProfile.address,
        highestQualification: userProfile.highestQualification,
        yearOfExperience: userProfile.yearOfExperience,
        pastEmployer: userProfile.pastEmployer,
      };
    };
    setUserDetails(newUserDetails);
    console.log(userDetails);
  };

  return (
    <div
      className="ui card"
      style={{
        borderRadius: "7px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Header
        as="h2"
        style={{ width: "100%", padding: "10px", alignItems: "center" }}
      >
        <Header.Content>Personal Information</Header.Content>
        <a onClick={handleOnEdit}>
          <Icon name="edit" style={{ float: "right" }} />
        </a>
        <hr />
      </Header>
      <Form
        unstackable
        style={{ width: "85%", padding: "10px" }}
        onSubmit={handleOnUpdate}
      >
        <Form.Group widths={2}>
          <Form.Input
            label="Full Name"
            placeholder="Full Name"
            defaultValue={userProfile.fullName}
            onChange={(e) => setUserDetails({...userDetails, fullName: e.target.value })}
            disabled={isVisible}
          />
          <Form.Input
            label="Aadhar Number"
            placeholder="Aadhar Number"
            defaultValue={userProfile.aadharNo}
            onChange={(e) => setUserDetails({...userDetails, aadharNo: e.target.value })}
            disabled={isVisible}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="College Name"
            placeholder="College Name"
            defaultValue={userProfile.college}
            onChange={(e) => setUserDetails({...userDetails, college: e.target.value })}
            disabled={isVisible}
          />
          <Form.Input
            label="Contact Number"
            placeholder="Contact Number"
            type="tel"
            defaultValue={userProfile.contactNo}
            onChange={(e) => setUserDetails({...userDetails, contactNo: e.target.value })}
            disabled={isVisible}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="Address"
            placeholder="Address"
            defaultValue={userProfile.address}
            onChange={(e) => setUserDetails({...userDetails, address: e.target.value })}
            disabled={isVisible}
          />
          <Form.Input
            label="Highest Qualification"
            placeholder="Highest Qualification"
            defaultValue={userProfile.highestQualification}
            onChange={(e) =>
              setUserDetails({...userDetails, highestQualification: e.target.value })
            }
            disabled={isVisible}
          />
        </Form.Group>

        <Form.Group widths={2}>
          <Form.Dropdown
            label="Skills"
            placeholder="Skills"
            multiple
            selection
            options={options}
            disabled={isVisible}
          />
          <Form.Input
            label="Years Of Experience"
            placeholder="Years Of Experience"
            type="number"
            defaultValue={userProfile.yearOfExperience}
            onChange={(e) =>
              setUserDetails({...userDetails, yearOfExperience: e.target.value })
            }
            disabled={isVisible}
          />
        </Form.Group>

        <Form.Group widths={2}>
          <Form.Input
            label="Past Employer (If any)"
            placeholder="Past Employer"
            defaultValue={userProfile.pastEmployer}
            onChange={(e) => setUserDetails({...userDetails, pastEmployer: e.target.value })}
            disabled={isVisible}
          />
          <Form.Input
            label="Resume"
            placeholder="Upload Resume"
            type="file"
            disabled
          />
        </Form.Group>
        <Button
          style={{ backgroundColor: "#6c63ff", color: "white" }}
          type="submit"
          disabled={isVisible}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PersonalInfo;
