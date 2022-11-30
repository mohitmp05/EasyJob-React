package com.userprofile.repository;

import com.userprofile.model.UserJobs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserJobsRepo extends JpaRepository<UserJobs, Integer> {
    List<UserJobs> findByUsername(String username);
    UserJobs findByCompanyName(String companyName);
}
