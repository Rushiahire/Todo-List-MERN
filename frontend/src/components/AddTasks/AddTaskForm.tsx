import React from "react";

const AddTaskForm = ({ handleInputData, handleAddBtn }: any) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter Title"
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
            className="form-control"
            onChange={(e: any) => handleInputData(e)}
            rows={3}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary px-4"
          onClick={handleAddBtn}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
