import axios from "axios";

export const loginAPI: any = async (body: any) => {
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:8000/api/v1/login",
      body,
      config
    );

    response = res;
  } catch (error) {
    console.log(error);
  }
  return response;
};
