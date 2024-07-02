import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token: any = localStorage.getItem("id");
  const navigate: any = useNavigate();

  const handleLogoutBtn: any = () => {
    localStorage.removeItem("id");
    navigate("/login");
  };
  return (
    <>
      <nav className="container navbar navbar-expand-lg bg-body-tertiary py-0 pt-1">
        <div className="container-fluid">
          <a className="navbar-brand text-danger fw-bold fs-3" href="#">
            TODO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {token && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/add-task">
                      <button type="button" className="btn btn-light">
                        Add Task
                      </button>
                    </NavLink>
                  </li>
                )}
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    <button type="button" className="btn btn-secondary px-3">
                      Sign up
                    </button>
                  </NavLink>
                </li>
                {token ? (
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleLogoutBtn}>
                      <button type="button" className="btn btn-primary">
                        Logout
                      </button>
                    </a>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      <button type="button" className="btn btn-primary px-3">
                        Login
                      </button>
                    </NavLink>
                  </li>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <hr className="my-1" />
    </>
  );
};

export default Navbar;
