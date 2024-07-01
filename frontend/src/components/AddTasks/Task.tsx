import { useEffect, useState } from "react";
import { addTaskApi } from "../../services/api/add-task-api";
import TaskListing from "./TaskListing";
import { getTaskListingApi } from "../../services/api/get-task-listing-api";
import AddTaskForm from "./AddTaskForm";

const Task = () => {
  const [taskListingData, setTaskListingData] = useState<any>([]);
  const [inputValues, setInputValues] = useState<any>();
  const ids: any = localStorage.getItem("id");
  console.log(ids);

  const getTaskListingFun: any = async () => {
    let getTaskList: any = await getTaskListingApi(ids);

    if (getTaskList.data.status === "success") {
      setTaskListingData(getTaskList.data.list);
    }
  };

  useEffect(() => {
    getTaskListingFun();
  }, []);

  const handleInputData: any = (e: any) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleAddBtn: any = async () => {
    let addTask: any = await addTaskApi({
      title: inputValues.title,
      body: inputValues.body,
      id: ids,
    });
    console.log("add task api ", addTask);
    if (addTask.data.status === "success") {
      getTaskListingFun();
    } else {
      alert("Failed to Add Task");
    }
  };
  return (
    <div className="container mt-3">
      <AddTaskForm
        handleInputData={handleInputData}
        handleAddBtn={handleAddBtn}
      />
      <TaskListing taskListingData={taskListingData} />
    </div>
  );
};

export default Task;
