import axios from "axios";

export const fetchCardData = () => {
  return axios.get("https://mocki.io/v1/f19d3f53-8ff8-4ddd-bf99-fa85beab4e53");
};
