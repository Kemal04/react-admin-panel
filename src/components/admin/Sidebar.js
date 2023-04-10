import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="position-fixed pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="home" ></span>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="file" ></span>
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="shopping-cart" ></span>
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="users" ></span>
                            Customers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="bar-chart-2" ></span>
                            Reports
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="layers" ></span>
                            Integrations
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
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="file-text" ></span>
                            Current month
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="file-text" ></span>
                            Last quarter
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="align-text-bottom me-2" />
                            <span data-feather="file-text" ></span>
                            Social engagement
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link d-flex align-items-center">
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