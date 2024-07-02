import axios from "axios";
import { BASE_URL } from "../config/api-config";

export const getTaskListingApi: any = async (id: any) => {
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/getTasks/${id}`, config);

    response = res;
  } catch (error) {
    console.log(error);
  }
  return response;
};
