import React from "react";
import UpdateTask from "./UpdateTask";
import TaskListingCards from "./TaskListingCards";

const TaskListing = ({ taskListingData }: any) => {
  console.log("tass", taskListingData);
  return (
    <>
      <TaskListingCards taskListingData={taskListingData} />

      <UpdateTask />
    </>
  );
};

export default TaskListing;
