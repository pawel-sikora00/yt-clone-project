import axios from "axios";

const KEY = `AIzaSyAfnZOKKe0ZghJq4sFfUrpt48QdFSHxJt0`;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
