const AddTaskForm = ({
  inputValues,
  handleInputData,
  handleAddBtn,
  isUpdate,
}: any) => {
  console.log("input", inputValues);
  return (
    <div className="row justify-content-center ">
      <div className="col-lg-7 shadow p-5 py-4 mb-5 bg-body-tertiary rounded border">
        <h4 className="pb-2">Add Task</h4>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter Title"
            value={inputValues?.title}
            className="form-control"
            onChange={(e: any) => handleInputData(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            id="body"
            name="body"
            value={inputValues?.body}
            className="form-control"
            onChange={(e: any) => handleInputData(e)}
            rows={3}
          ></textarea>
        </div>
        {!isUpdate && (
          <button
            type="button"
            className="btn btn-primary px-4"
            onClick={handleAddBtn}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default AddTaskForm;
