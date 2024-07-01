import React from "react";
import { deleteTaskApi } from "../../services/api/delete-task-api";

const TaskListingCards = ({ taskListingData }: any) => {
  const handleDeleteBtn: any = async (id: any) => {
    let deleteTask: any = await deleteTaskApi(id);
    console.log("deleteTask", deleteTask);
  };

  console.log("taskListingData", taskListingData);
  return (
    <div className="row">
      {taskListingData.length > 0 &&
        taskListingData.map((data: any) => {
          return (
            <div className="col-lg-3">
              <div className="card mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>

                  <p className="card-text">{data.body}</p>
                  <div className="d-flex justify-content-start">
                    <button
                      className="btn btn-secondary px-1 py-0"
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
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
  );
};

export default TaskListingCards;
