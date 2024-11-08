import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
    return (
        <>
            <footer className="footer">
                <p className="fs-11 text-muted fw-medium text-uppercase mb-0 copyright">
                    <span>Copyright ©</span>
                    <script>
                        document.write(new Date().getFullYear());
                    </script>
                </p>
                <div className="d-flex align-items-center gap-4">
                    <Link to="#" className="fs-11 fw-semibold text-uppercase">Help</Link>
                    <Link to="#" className="fs-11 fw-semibold text-uppercase">Terms</Link>
                    <Link to="#" className="fs-11 fw-semibold text-uppercase">Privacy</Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;