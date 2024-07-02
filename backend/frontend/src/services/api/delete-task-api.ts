import axios from "axios";
import { BASE_URL } from "../config/api-config";

export const deleteTaskApi: any = async (id: any) => {
  console.log("delet id", id);
  const userId: any = localStorage.getItem("id");
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
    data: {
      userId: userId, // Include userId in the data property
    },
  };

  try {
    const res = await axios.delete(
      `${BASE_URL}/api/v1/deleteTask/${id}`,
      config
    );

    response = res;
  } catch (error) {
    console.log(error);
  }
  return response;
};
