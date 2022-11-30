package com.userprofile.service;

import com.userprofile.dto.ApplicantsDTO;
import com.userprofile.model.UserJobs;
import com.userprofile.model.UserProfile;
import com.userprofile.repository.UserJobsRepo;
import com.userprofile.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class UserProfileServiceImpl {

    @Autowired
    private UserProfileRepository profileRepository;

    @Autowired
    private UserJobsRepo userJobsRepo;

    @Autowired
    private UserProfileRepository userProfileRepository;

    // Adding profile
    public UserProfile addUser(UserProfile profile){
        return profileRepository.save(profile);
    }

    // View Profile
    public UserProfile viewProfileById(String username){
        return profileRepository.findById(username).orElse(null);
    }

    // Update Profile
    public UserProfile updateUser(UserProfile user){
        return profileRepository.save(user);
    }

    //get applied jobs
    public List<UserJobs> getAppliedJobs(String username){
        return userJobsRepo.findByUsername(username);
    }

    public String applyJob(UserJobs job){
        userJobsRepo.save(job);
        return "Job Applied";
    }

    public ApplicantsDTO getApplicants(String companyName){
        UserJobs userJobs = userJobsRepo.findByCompanyName(companyName);
        String username = userJobs.getUsername();
        UserProfile userProfile = userProfileRepository.findById(username).orElse(null);
        ApplicantsDTO applicantsDTO = new ApplicantsDTO();
        applicantsDTO.setUsername(userProfile.getUsername());
        applicantsDTO.setAddress(userProfile.getAddress());
        applicantsDTO.setCollege(userProfile.getCollege());
        applicantsDTO.setAadharNo(userProfile.getAadharNo());
        applicantsDTO.setFullName(userProfile.getFullName());
        applicantsDTO.setSkills(userProfile.getSkills());
        applicantsDTO.setContactNo(userProfile.getContactNo());
        applicantsDTO.setJobTitle(userJobs.getJobTitle());
        applicantsDTO.setJobDescription(userJobs.getJobDescription());
        applicantsDTO.setPastEmployer(userProfile.getPastEmployer());
        applicantsDTO.setYearOfExperience(userProfile.getYearOfExperience());
        applicantsDTO.setHighestQualification(userProfile.getHighestQualification());
        return applicantsDTO;
    }

//    public FileDB store(MultipartFile file) throws IOException {
//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//        FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());
//
//        return fileDBRepository.save(FileDB);
//    }
}
