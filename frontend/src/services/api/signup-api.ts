import axios from "axios";
import { BASE_URL } from "../config/api-config";

export const signUpAPI: any = async (body: any) => {
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/register`, body, config);
    console.log("ress", res);
    response = res;
  } catch (error) {
    console.log("ress ee");

    return error;
  }
  return response;
};
