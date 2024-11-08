import { Link } from "react-router-dom";

const Login = (): JSX.Element => {
    return (
        <>
            <main className="auth-minimal-wrapper">
                <div className="auth-minimal-inner">
                    <div className="minimal-card-wrapper">
                        <div className="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
                            <Link to="/dashboard" className="wd-50 bg-white p-2 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                                <img src="./assets/images/favicon.png" alt="" className="img-fluid" />
                            </Link>
                            <div className="card-body p-sm-5">
                                <h2 className="fs-20 fw-bolder mb-4">Login</h2>
                                <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
                                <p className="fs-12 fw-medium text-muted">Thank you for get back <strong>10Cents</strong> web applications, let's access our the best recommendation for you.</p>
                                <form action="index.html" className="w-100 mt-4 pt-2">
                                    <div className="mb-4">
                                        <input type="email" className="form-control" placeholder="Email or Username" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mt-5">
                                        <button type="submit" className="btn btn-lg btn-primary w-100">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;