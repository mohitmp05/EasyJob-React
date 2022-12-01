package com.userprofile.repository;

import com.userprofile.model.UserJobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface UserJobsRepo extends JpaRepository<UserJobs, Integer> {
    List<UserJobs> findByUsername(String username);
    UserJobs findByCompanyName(String companyName);

    @Query("SELECT u.username FROM UserJobs u WHERE u.companyName = ?1")
    Collection<String> findUsernameByCompanyName(String companyName);
}
