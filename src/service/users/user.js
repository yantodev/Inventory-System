import axios from "axios";
const API_BASE_URL = "http://localhost:8080/api-backend/users";

class usersService {
  getUsers = () => {
    return axios.get(API_BASE_URL).catch((error) => {
      console.log(error.response);
    });
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
    return axios
      .post(API_BASE_URL, newUser)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  //get user by id
  getUserById = (id) => {
    return axios
      .get(API_BASE_URL + "/" + id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //update users
  updateUser = (newUser, id) => {
    return axios
      .put(API_BASE_URL + "/" + id, newUser, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("cek respon", response);
      })
      .catch((error) => {
        console.log("error message", error.response);
      });
    // const data = newUser;
    // return fetch(API_BASE_URL + "/" + id, {
    //   method: "PUT", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: newUser,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    // });
  };

  ///delete user by id
  deleteUser = (id) => {
    return axios.delete(API_BASE_URL + "/" + id).catch((error) => {
      console.log("error message", error.response);
    });
  };
}

export default new usersService();
