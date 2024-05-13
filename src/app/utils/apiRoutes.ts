import axios from "axios";
import User from "./user";



const handleRequests = async (data: User) => {
  try {
    const user = await axios.post('/api/users', data);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

export default handleRequests
