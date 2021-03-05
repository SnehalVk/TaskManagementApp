import axios from 'axios'
//import { useState } from 'react'
import {API_URL} from '../../Constants.js'

export const USER_NAME_SESSON_ATTREBUTE_NAME = 'authenticatedUser'


class AuthenticationService{

    createBasicAuthToken(username, password){
        // Base 64 encoded username and password.
        return 'Basic '  + window.btoa(username + ":" + password)
    }

    executeBasicAuthenticationService(username, password){
       
        return axios.get(`${API_URL}/basicauth`, 
        {headers : {authorization: this.createBasicAuthToken(username, password)}})
    }

    executeJWTAuthenticationService(username, password){
       
        return axios.post(`${API_URL}/authenticate`, {username, password})
    }
    
    
    registerSuccessfulLogin(username, password){
       // let basicAuthHeader = 'Basic '  + window.btoa(username + ":" + password)

        console.log('RegisterSuccessfulLogin');
        sessionStorage.setItem(USER_NAME_SESSON_ATTREBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    createJWTToken(token){
        return 'Bearer ' + token
    }

    registerSuccessfulLoginJWT(username, token){
        sessionStorage.setItem(USER_NAME_SESSON_ATTREBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    
    logout(){
        sessionStorage.removeItem(USER_NAME_SESSON_ATTREBUTE_NAME);
    }



    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSON_ATTREBUTE_NAME)
        if(user === null)
            return false
        return true
    }

    getLoggedInUsername(){
        let user = sessionStorage.getItem(USER_NAME_SESSON_ATTREBUTE_NAME)
        if(user === null)
            return ''
        return user
    }

    setupAxiosInterceptors(token){
      
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                  config.headers.authorization =  token
                }
                return config
            }
        )
    }


}

export default new AuthenticationService()