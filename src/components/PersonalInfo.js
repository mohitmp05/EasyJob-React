import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  Button,
  Divider,
  Dropdown,
  Form,
  Header,
  Icon,
} from "semantic-ui-react";
import { fetchProfile, updateUser } from "../redux/userProfile/userProfileSlice";

const PersonalInfo = (props) => {
  const options = [
      { key: "angular", text: "Angular", value: 1 },
      { key: "css", text: "CSS", value: 2 },
      { key: "design", text: "Graphic Design", value: 3 },
      { key: "ember", text: "Ember", value: 4 },
      { key: "html", text: "HTML", value:5},
      { key: "ia", text: "Information Architecture", value: 6 },
      { key: "javascript", text: "Javascript", value:7},
      { key: "mech", text: "Mechanical Engineering", value: 8},
      { key: "meteor", text: "Meteor", value: 9 },
      { key: "node", text: "NodeJS", value:10 },
      { key: "plumbing", text: "Plumbing", value: 11 },
      { key: "python", text: "Python", value:12 },
      { key: "rails", text: "Rails", value: 13},
      { key: "react", text: "React", value: 14 },
      { key: "repair", text: "Kitchen Repair", value: 15},
      { key: "ruby", text: "Ruby", value: 16},
      { key: "ui", text: "UI Design", value: 17 },
      { key: "ux", text: "User Experience", value: 18 },
  ];

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile.userProfile);
  const [isVisible, setIsVisible] = useState(true);
  const [skills, setskills] = useState([]);
  const [userDetails, setUserDetails] = useState({
    username: props.data,
    fullName: "",
    aadharNo: "",
    college: "",
    contactNo: "",
    highestQualification: "",
    skills: [],
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
    dispatch(updateUser(userDetails));
    notify();
    console.log(userDetails);
    setIsVisible(true);
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

  const notify = () => {
    toast.success("Profile Details Updated", {
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
            onChange={(e) =>
              setUserDetails({ ...userDetails, fullName: e.target.value })
            }
            disabled={isVisible}
          />
          <Form.Input
            label="Aadhar Number"
            placeholder="Aadhar Number"
            defaultValue={userProfile.aadharNo}
            onChange={(e) =>
              setUserDetails({ ...userDetails, aadharNo: e.target.value })
            }
            disabled={isVisible}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="College Name"
            placeholder="College Name"
            defaultValue={userProfile.college}
            onChange={(e) =>
              setUserDetails({ ...userDetails, college: e.target.value })
            }
            disabled={isVisible}
          />
          <Form.Input
            label="Contact Number"
            placeholder="Contact Number"
            type="tel"
            defaultValue={userProfile.contactNo}
            onChange={(e) =>
              setUserDetails({ ...userDetails, contactNo: e.target.value })
            }
            disabled={isVisible}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="Address"
            placeholder="Address"
            defaultValue={userProfile.address}
            onChange={(e) =>
              setUserDetails({ ...userDetails, address: e.target.value })
            }
            disabled={isVisible}
          />
          <Form.Input
            label="Highest Qualification"
            placeholder="Highest Qualification"
            defaultValue={userProfile.highestQualification}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                highestQualification: e.target.value,
              })
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
            search
            options={options}
            disabled={isVisible}
            onChange={(e, { value }) => {
              setskills(skills => [...skills,value]);
              setUserDetails({ ...userDetails, skills: skills.at(skills.length - 1) })
            }
          }
          />
          <Form.Input
            label="Years Of Experience"
            placeholder="Years Of Experience"
            type="number"
            defaultValue={userProfile.yearOfExperience}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                yearOfExperience: e.target.value,
              })
            }
            disabled={isVisible}
          />
        </Form.Group>

        <Form.Group widths={2}>
          <Form.Input
            label="Past Employer (If any)"
            placeholder="Past Employer"
            defaultValue={userProfile.pastEmployer}
            onChange={(e) =>
              setUserDetails({ ...userDetails, pastEmployer: e.target.value })
            }
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
