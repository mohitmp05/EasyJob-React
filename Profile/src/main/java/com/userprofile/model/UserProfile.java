package com.userprofile.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserProfile {

    @Id
    private String username;
    private String fullName;
    private long aadharNo;
    private String college;
    private String contactNo;
    private String highestQualification;
    private String skills;
    private int yearOfExperience;
    private String pastEmployer;
    private String address;
//    @Lob
//    @Column(name = "resumedata", length = 1000)
//    private byte[] resumeData;
}
