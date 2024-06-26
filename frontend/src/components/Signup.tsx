import { useState } from "react";
import { signUpAPI } from "../services/api/signup-api";

const Signup = () => {
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmitBtn: any = async (e: any) => {
    e.preventDefault();

    let signupData: any = await signUpAPI(formValues);
    console.log("signupData api res", signupData);

    if (signupData.data.status === "success") {
      console.log("login user", signupData.data.data._id);
    }
  };

  const handleInputValues: any = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  console.log("form values", formValues);

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center py-5">
        <div className="col-6 border rounded-3 p-5 ">
          <h4 className="my-3">Sign Up</h4>
          <form onSubmit={handleSubmitBtn}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e: any) => handleInputValues(e)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                onChange={(e: any) => handleInputValues(e)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={(e: any) => handleInputValues(e)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
