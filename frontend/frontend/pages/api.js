import axios from "axios";

const baseURL = "http://127.0.0.1:5000"

export async function getUsers() {
  let data = {};
  return axios({
    method: "get",
    url: baseURL + "/read_users",
    headers: {},
    data: data,
  })
    .then(function (response) {
      return(response.data)
    })
    .catch(function (error) {
      return(error);
    });
}

export async function getUserData(usr_id) {
    let data = {};
    return axios({
      method: "get",
      url: baseURL + "/read_users?user_id="+usr_id,
      headers: {},
      data: data,
    })
      .then(function (response) {
        return(response.data)
      })
      .catch(function (error) {
        return(error);
      });
}

export async function createUser(request){
    let data = request;
    let config = {
      method: 'post',
      url: baseURL + "/user_patient",
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : data
    };
    
    return axios(config)
    .then(function (response) {
      return(response.data);
    })
    .catch(function (error) {
      return(error);
    });
  }
  export async function getNotifs() {
    let data = {};
    return axios({
      method: "get",
      url: baseURL + "/read_notifs",
      headers: {},
      data: data,
    })
      .then(function (response) {
        return(response.data)
      })
      .catch(function (error) {
        return(error);
      });
  }
  
  export async function getNotifData(usr_id) {
      let data = {};
      return axios({
        method: "get",
        url: baseURL + "/read_notifs?notif_id="+usr_id,
        headers: {},
        data: data,
      })
        .then(function (response) {
          return(response.data)
        })
        .catch(function (error) {
          return(error);
        });
  }
