import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
        //console.log('executed service')
    }
    
    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean')
        //console.log('executed service')
    }

    executeHelloWorlPathVariableService(name){
        // let username = 'snehal'
        // let password = '123'

        // let basicAuthHeader = 'Basic '  + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,
        //      {
        //          headers :{
        //              authorization  : basicAuthHeader
        //          }
        //      }
         );
        //console.log('executed service')

    }
}

export default new HelloWorldService()