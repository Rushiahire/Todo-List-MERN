import axios from "axios";
import { BASE_URL } from "../config/api-config";

export const updateTaskApi: any = async (id: any, body: any) => {
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.put(
      `${BASE_URL}/api/v1/updateTask/${id}`,
      body,
      config
    );

    response = res;
  } catch (error) {
    console.log(error);
  }
  return response;
};
