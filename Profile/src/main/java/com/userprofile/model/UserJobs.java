package com.userprofile.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserJobs {
    @Id
    private int jobId;
    private String username;
    private String jobTitle;
    private String companyName;
    private String jobDescription;
    private ArrayList skillsRequired;
    private boolean applyStatus;

}
