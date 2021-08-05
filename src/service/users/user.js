import axios from "axios";
const API_BASE_URL = "http://localhost:8080/api-backend/users";

class usersService {
  getUsers = () => {
    return axios.get(API_BASE_URL);
    // return fetch(API_BASE_URL, {
    //   method: "GET",
    // })
    //   .then(function (respon) {
    //     return respon.json();
    //   })
    //   .then(function (data) {
    //     let allData = JSON.parse(JSON.stringify(data));
    //     console.log("api data", allData);
    //     return allData;
    //   });
  };

  createUsers = (newUser) => {
    return axios.post(API_BASE_URL, newUser);
  };
}

export default new usersService();
