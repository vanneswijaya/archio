import axios from "axios";
const STRAPI_URL = "http://localhost:1337";

export default {
  sendMessage(firstname, lastname, email, phone, company, message) {
    axios.post(STRAPI_URL + "/messages", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      company: company,
      message: message,
    });
  },
  async getHomePage() {
    var path = "/home-page";
    var response = await axios.get(STRAPI_URL + path);
    return response;
  },
  async getAllWorks() {
    var path = "/works";
    var response = await axios.get(STRAPI_URL + path);
    return response;
  },
  async getWorkPage() {
    var path = "/work-page";
    var response = await axios.get(STRAPI_URL + path);
    return response;
  },
  async getWorkDetail(title) {
    var path = "/works?title=" + title + "&";
    var response = await axios.get(STRAPI_URL + path);
    return response.data;
  },
  async getWorkInfobyId(id) {
    var path = "/works/" + id;
    var response = await axios.get(STRAPI_URL + path);
    return response.data;
  },
};
