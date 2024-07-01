import axios from "axios";

export const deleteTaskApi: any = async (id: any) => {
  console.log("delet id", id);
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.delete(
      `http://localhost:8000/api/v1/deleteTask/${id}`,
      config
    );

    response = res;
  } catch (error) {
    console.log(error);
  }
};
