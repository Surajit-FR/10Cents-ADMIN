import { Link } from "react-router-dom";

const ThemeCustomizer = (): JSX.Element => {
    return (
        <>
            <div className="theme-customizer">
                <div className="customizer-handle">
                    <Link to="#" className="cutomizer-open-trigger bg-primary">
                        <i className="feather-settings"></i>
                    </Link>
                </div>
                <div className="customizer-sidebar-wrapper">
                    <div
                        className="customizer-sidebar-header px-4 ht-80 border-bottom d-flex align-items-center justify-content-between">
                        <h5 className="mb-0">Theme Settings</h5>
                        <Link to="#" className="cutomizer-close-trigger d-flex">
                            <i className="feather-x"></i>
                        </Link>
                    </div>
                    <div className="customizer-sidebar-body position-relative p-4" data-scrollbar-target="#psScrollbarInit">

                        <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                            <label
                                className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label"
                                style={{ top: "-12px" }}>Navigation</label>
                            <div className="row g-2 theme-options-items app-navigation" id="appNavigationList">
                                <div className="col-6 text-center single-option">
                                    <input type="radio" className="btn-check" id="app-navigation-light" name="app-navigation"
                                        value="1" data-app-navigation="app-navigation-light" checked />
                                    <label
                                        className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                                        htmlFor="app-navigation-light">Light</label>
                                </div>
                                <div className="col-6 text-center single-option">
                                    <input type="radio" className="btn-check" id="app-navigation-dark" name="app-navigation"
                                        value="2" data-app-navigation="app-navigation-dark" />
                                    <label
                                        className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                                        htmlFor="app-navigation-dark">Dark</label>
                                </div>
                            </div>
                        </div>

                        <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set mt-5">
                            <label
                                className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label"
                                style={{ top: "-12px" }}>Header</label>
                            <div className="row g-2 theme-options-items app-header" id="appHeaderList">
                                <div className="col-6 text-center single-option">
                                    <input type="radio" className="btn-check" id="app-header-light" name="app-header" value="1"
                                        data-app-header="app-header-light" checked />
                                    <label
                                        className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                                        htmlFor="app-header-light">Light</label>
                                </div>
                                <div className="col-6 text-center single-option">
                                    <input type="radio" className="btn-check" id="app-header-dark" name="app-header" value="2"
                                        data-app-header="app-header-dark" />
                                    <label
                                        className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                                        htmlFor="app-header-dark">Dark</label>
                                </div>
                            </div>
                        </div>

                        <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                            <label
                                className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label"
                                style={{ top: "-12px" }}>Skins</label>
                            <div className="row g-2 theme-options-items app-skin" id="appSkinList">
                                <div className="col-6 text-center position-relative single-option light-button active">
                                    <input type="radio" className="btn-check" id="app-skin-light" name="app-skin" value="1"
                                        data-app-skin="app-skin-light" />
                                    <label
                                        className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                                        htmlFor="app-skin-light">Light</label>
                                </div>
                                <div className="col-6 text-center position-relative single-option dark-button">
                                    <input type="radio" className="btn-check" id="app-skin-dark" name="app-skin" value="2"
                                        data-app-skin="app-skin-dark" />
                                    <label
                                        className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label"
                                        htmlFor="app-skin-dark">Dark</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="customizer-sidebar-footer px-4 ht-60 border-top d-flex align-items-center gap-2">
                        <div className="flex-fill w-50">
                            <Link to="#" className="btn btn-danger" data-style="reset-all-common-style">Reset</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThemeCustomizer;