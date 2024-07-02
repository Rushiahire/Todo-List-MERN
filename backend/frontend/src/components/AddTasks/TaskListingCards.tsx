import { deleteTaskApi } from "../../services/api/delete-task-api";
import { getTaskListingApi } from "../../services/api/get-task-listing-api";
import { updateTaskApi } from "../../services/api/update-task-api";
import UpdateTask from "./UpdateTask";

const TaskListingCards = ({
  taskListingData,
  setTaskListingData,
  inputValues,
  setInputValues,
  handleInputData,
}: any) => {
  const ids: any = localStorage.getItem("id");

  const handleDeleteBtn: any = async (id: any) => {
    let deleteTask: any = await deleteTaskApi(id);
    console.log("deleteTask", deleteTask);
    if (deleteTask.data.status === "success") {
      let getTaskList: any = await getTaskListingApi(ids);

      if (getTaskList.data.status === "success") {
        setTaskListingData(getTaskList.data.list);
      }
    }
  };

  const handleUpdateRecord: any = (data: any) => {
    setInputValues(data);
  };
  const handleUpdateBtn: any = async () => {
    console.log(inputValues);
    let body = {
      title: inputValues.title,
      body: inputValues.body,
      id: ids,
    };
    console.log("body", body);
    let updateTask: any = await updateTaskApi(inputValues._id, body);
    console.log("add task api ", updateTask);
    if (updateTask.data.status === "success") {
      let getTaskList: any = await getTaskListingApi(ids);

      if (getTaskList.data.status === "success") {
        setTaskListingData(getTaskList.data.list);
      }

      setInputValues({});
    } else {
      alert("Failed to Add Task");
    }
  };
  console.log("taskListingData", taskListingData);
  return (
    <>
      <div className="row">
        {taskListingData.length > 0 &&
          taskListingData.map((data: any) => {
            return (
              <div className="col-lg-3 col-md-3 col-6">
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>

                    <p className="card-text">{data.body}</p>
                    <div className="d-flex justify-content-start">
                      <button
                        className="btn btn-secondary px-1 py-0"
                        data-bs-toggle="modal"
                        data-bs-target="#updateModal"
                        onClick={() => handleUpdateRecord(data)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger px-1 py-0 ms-3"
                        onClick={() => handleDeleteBtn(data._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <UpdateTask
        handleInputData={handleInputData}
        inputValues={inputValues}
        isUpdate={true}
        handleUpdateBtn={handleUpdateBtn}
      />
    </>
  );
};

export default TaskListingCards;
