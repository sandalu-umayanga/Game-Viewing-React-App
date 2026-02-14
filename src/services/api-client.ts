import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4b39fff3d9ea40eca5d2c77d759a5063", // Get your key from https://rawg.io/apidocs
  },
});
