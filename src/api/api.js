import axios from "axios";

export const BACKEND_POINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_POINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};