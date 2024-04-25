import axios from "axios";

const handleRequests = async (data) => {
  try {
    const user = await axios.post('/api/users', data);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

export default handleRequests
