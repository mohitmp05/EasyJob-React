package com.userprofile.controller;

import com.userprofile.model.UserJobs;
import com.userprofile.model.UserProfile;
import com.userprofile.repository.UserProfileRepository;
import com.userprofile.service.UserProfileServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/profile")
@CrossOrigin
public class UserProfileController {

    @Autowired
    private UserProfileServiceImpl profileService;

    @GetMapping("/view/{username}")
    public ResponseEntity<UserProfile> viewProfile(@PathVariable("username") String username) {
        return ResponseEntity.ok(profileService.viewProfileById(username));
    }

    @PutMapping("/update")
    public ResponseEntity<UserProfile> updateProfile( @RequestBody UserProfile profile) {
        return ResponseEntity.ok(profileService.updateUser(profile));
    }

    @GetMapping("/appliedJobs/{username}")
    public ResponseEntity<List<UserJobs>> getAppliedJobs(@PathVariable("username") String username) {
        return ResponseEntity.ok(profileService.getAppliedJobs(username));
    }

    @PutMapping("/applyjob")
    public ResponseEntity addJob(@RequestBody UserJobs job) {
        return ResponseEntity.ok(profileService.applyJob(job));
    }
}

//    @PostMapping("/upload")
//    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
//        String message = "";
//        try {
//            storageService.store(file);
//
//            message = "Uploaded the file successfully: " + file.getOriginalFilename();
//            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
//        } catch (Exception e) {
//            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
//            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
//        }
//    }
