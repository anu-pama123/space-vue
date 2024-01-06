import { Fragment } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import ErrorBoundary from "../ErrorBoundary/errorboundary";


// style
import '../Navigation/navigation.css';

// components
import Dashboard from "../Pages/Dashboard/dashboard";

const Navigation = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }
    return (
        <Fragment>
            <div className="header-container">
                <div className="header-subcontainer">
                    <div className="app-title">SpaceVue</div>
                    <div className="header-items">
                        <Link to="piechart" className="piechart-nav" smooth={true} duration={500}>Pie chart</Link>
                        <Link to="barchart" className="barchart-nav" smooth={true} duration={500}>Bar chart</Link>
                        <div to="/login" className="logout-nav" onClick={() => handleLogout()}>Logout</div>
                    </div>
                </div>
            </div>
            <ErrorBoundary>
                <Dashboard>
                    <Outlet />
                </Dashboard>
            </ErrorBoundary>
        </Fragment>
    )
}

export default Navigation;