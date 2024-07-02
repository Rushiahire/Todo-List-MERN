import axios from "axios";
import { BASE_URL } from "../config/api-config";

export const addTaskApi: any = async (body: any) => {
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/addTask`, body, config);

    response = res;
  } catch (error) {
    console.log(error);
  }
  return response;
};
