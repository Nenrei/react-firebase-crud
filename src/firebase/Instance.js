import axios from "axios";

export default axios.create({
  baseURL: "https://crud-operations-react-default-rtdb.firebaseio.com/"
})