import axios from "axios";
import UserData from "./userInterface";

const handleRequests = async (data: UserData) => {
  try {
    const user = await axios.post("/api/users", data);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

export default handleRequests;
