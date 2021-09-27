import axios from "axios";

const protocol = "https://";

const serverAddress = "debtcalc-strapi-demo.herokuapp.com/";

const api = {
  get: async (url) => {
    const { data } = await axios.get(`${protocol + serverAddress + url}`);
    return data;
  },
  post: async (url, obj) => {
    const { data } = await axios.post(`${protocol + serverAddress + url}`, obj);
    return data;
  },
};

export { api };
