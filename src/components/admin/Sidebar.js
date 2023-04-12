import { faBed, faBuilding, faCogs, faComment, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

const Sidebar = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div>
            <div className="position-fixed pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/users" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faUsers} className="align-text-bottom me-2" />
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faBuilding} className="align-text-bottom me-2" />
                            Categories
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faBed} className="align-text-bottom me-2" />
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faComment} className="align-text-bottom me-2" />
                            Comments
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faCogs} className="align-text-bottom me-2" />
                            Settings
                        </NavLink>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Saved reports</span>
                    <NavLink to="/" className="link-secondary" href="#" aria-label="Add NavLink new report">
                        <span data-feather="plus-circle" className="align-text-bottom"></span>
                    </NavLink>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="file-text" ></span>
                            Current month
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="file-text" ></span>
                            Last quarter
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="file-text" ></span>
                            Social engagement
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link d-flex align-items-center ${darkMode ? "text-white" : "text-dark"}`}>
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="file-text" ></span>
                            Year-end sale
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar