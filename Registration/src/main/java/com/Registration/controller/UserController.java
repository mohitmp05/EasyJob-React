package com.Registration.controller;

import com.Registration.model.AuthenticationRequest;
import com.Registration.model.AuthenticationResponse;
import com.Registration.model.User;
import com.Registration.service.CustomUserService;
import com.Registration.service.UserDetailsServiceImpl;
import com.Registration.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private CustomUserService customUserService;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    private AuthenticationResponse authenticationResponse = new AuthenticationResponse();

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        System.out.println("In customer authentication");
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = customUserService.loadUserByUsername(authenticationRequest.getUsername());
//        System.out.println(authenticationRequest.getUsername());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        authenticationResponse.setJwt(jwt);
        System.out.println(authenticationResponse.getJwt());
        return ResponseEntity.ok(authenticationResponse.getJwt());
    }

    @PostMapping("/register")
    public ResponseEntity registerCustomers(@RequestBody User user){
        return ResponseEntity.ok(userDetailsService.registerUser(user));
    }

    @GetMapping("/getuser")
    public ResponseEntity findCustomerByUsername() throws Exception {
        Object auth = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)auth).getUsername();
        System.out.println("get user");
        return ResponseEntity.ok(userDetailsService.findUserDetails(username));
    }
//
//    @PostMapping("/addDetails")
//    public ResponseEntity addCustomerDetails(@RequestBody @Valid EmployeeDTO employeeDTO){
//        Object auth = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        String username = ((UserDetails)auth).getUsername();
//        return ResponseEntity.ok(employeeServiceImpl.addCustomerDetails(employeeDTO,username));
//    }

}