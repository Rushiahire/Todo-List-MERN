import axios from "axios";

export const getTaskListingApi: any = async (id: any) => {
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `http://localhost:8000/api/v1/getTasks/${id}`,
      config
    );

    response = res;
  } catch (error) {
    console.log(error);
  }
  return response;
};
