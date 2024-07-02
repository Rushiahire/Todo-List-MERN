import TaskListingCards from "./TaskListingCards";

const TaskListing = ({
  taskListingData,
  setTaskListingData,
  inputValues,
  setInputValues,
  handleInputData,
}: any) => {
  console.log("tass", taskListingData);
  return (
    <>
      <div className="border mt-3 shadow p-3 mb-5 bg-body-tertiary rounded">
        <TaskListingCards
          taskListingData={taskListingData}
          setTaskListingData={setTaskListingData}
          inputValues={inputValues}
          setInputValues={setInputValues}
          handleInputData={handleInputData}
        />
      </div>
    </>
  );
};

export default TaskListing;
