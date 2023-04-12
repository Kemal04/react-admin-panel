import React, { useContext } from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock, faComment, faEllipsis, faHotel, faPenAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import user_icon from '../../assets/icons/user.jpg'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import corner_bg from '../../assets/bg/corner-1.png'
import { ThemeContext } from '../../context/ThemeContext'

const Admin = () => {

    const { darkMode } = useContext(ThemeContext)

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <>
            <div className={`d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ${darkMode ? "text-white" : ""}`}>
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar" className="align-text-bottom"></span>
                        This week
                    </button>
                </div>
            </div>

            <div className='row mt-5 g-0'>
                <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-3'>
                    <div className="row p-3 align-items-center mx-3 rounded-3 shadow text-white" style={{ background: "linear-gradient(to right, #ff512f, #f09819)" }}>
                        <div className="col-lg-8">
                            <h3 className='mb-3'>50</h3>
                            <p>Ulanyjylar</p>
                        </div>
                        <div className="col-lg-4 h1">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                        <Link to="/" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-3'>
                    <div className="row p-3 align-items-center mx-3 rounded-3 shadow text-white" style={{ background: "linear-gradient(to right, #0fab01, #15ff00)" }}>
                        <div className="col-lg-8">
                            <h3 className='mb-3'>50</h3>
                            <p>Ulanyjylar</p>
                        </div>
                        <div className="col-lg-4 h1">
                            <FontAwesomeIcon icon={faHotel} />
                        </div>
                        <Link to="/" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-3'>
                    <div className="row p-3 align-items-center mx-3 rounded-3 shadow text-white" style={{ background: "linear-gradient(to right, #ff0000, #ff6767)" }}>
                        <div className="col-lg-8">
                            <h3 className='mb-3'>50</h3>
                            <p>Ulanyjylar</p>
                        </div>
                        <div className="col-lg-4 h1">
                            <FontAwesomeIcon icon={faComment} />
                        </div>
                        <Link to="/" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-3'>
                    <div className="row p-3 align-items-center mx-3 rounded-3 shadow text-white" style={{ background: "linear-gradient(to right, #1845ad, #23a2f6)" }}>
                        <div className="col-lg-8">
                            <h3 className='mb-3'>50</h3>
                            <p>Ulanyjylar</p>
                        </div>
                        <div className="col-lg-4 h1">
                            <FontAwesomeIcon icon={faPenAlt} />
                        </div>
                        <Link to="/" className="border-light border-top pt-2 nav-link text-white">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-12 mb-3'>
                    <div className='card border-0 shadow'>
                        <div className='card-header p-3'>
                            <div className='row align-items-center'>
                                <div className='col-xl-4 col-lg-4 col-md-12 col-12'>Users</div>
                                <div className='col-xl-8 col-lg-8 col-md-12 col-12'>
                                    <select class="form-select form-select-sm">
                                        <option>Working Time</option>
                                        <option>Estimated Time</option>
                                        <option>Billable Time</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row align-items-center'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center'>
                                    <img src={user_icon} alt="" className='img-fluid rounded-circle me-3' style={{ width: "40px" }} />
                                    Kemal Hojayew
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center'>
                                    <FontAwesomeIcon icon={faClock} className='me-2 text-primary' />
                                    12 Jun 2023 12:00
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row align-items-center'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center'>
                                    <img src={user_icon} alt="" className='img-fluid rounded-circle me-3' style={{ width: "40px" }} />
                                    Kemal Hojayew
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center'>
                                    <FontAwesomeIcon icon={faClock} className='me-2 text-primary' />
                                    12 Jun 2023 12:00
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row align-items-center'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center'>
                                    <img src={user_icon} alt="" className='img-fluid rounded-circle me-3' style={{ width: "40px" }} />
                                    Kemal Hojayew
                                </div>
                                <div className='col-xl-6 d-flex justify-content-end align-items-center'>
                                    <FontAwesomeIcon icon={faClock} className='me-2 text-primary' />
                                    12 Jun 2023 12:00
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row align-items-center'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center'>
                                    <img src={user_icon} alt="" className='img-fluid rounded-circle me-3' style={{ width: "40px" }} />
                                    Kemal Hojayew
                                </div>
                                <div className='col-xl-6 d-flex justify-content-end align-items-center'>
                                    <FontAwesomeIcon icon={faClock} className='me-2 text-primary' />
                                    12 Jun 2023 12:00
                                </div>
                            </div>
                        </div>
                        <div className='card-footer text-center'>
                            <Link to="/" className='d-flex align-items-center justify-content-center text-decoration-none'>
                                Show all projects
                                <FontAwesomeIcon icon={faArrowRight} className='ms-2 text-primary' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-12 mb-3'>
                    <div className='card border-0 shadow'>
                        <div className='card-header p-3'>
                            <div className='row align-items-center'>
                                <div className='col-xl-5 col-lg-5 col-md-5 col-5'>Total Sales</div>
                                <div className='col-xl-5 col-lg-5 col-md-5 col-5'>
                                    <select class="form-select form-select-sm select-month me-2">
                                        <option value="0">January</option>
                                        <option value="1">February</option>
                                        <option value="2">March</option>
                                        <option value="3">April</option>
                                        <option value="4">May</option>
                                        <option value="5">Jun</option>
                                        <option value="6">July</option>
                                        <option value="7">August</option>
                                        <option value="8">September</option>
                                        <option value="9">October</option>
                                        <option value="10">November</option>
                                        <option value="11">December</option>
                                    </select>
                                </div>
                                <div className='col-xl-2 col-lg-2 col-md-2 col-2'>
                                    <div class="dropdown font-sans-serif btn-reveal-trigger">
                                        <button class="btn btn-link text-600 btn-sm dropdown-caret-none btn-reveal text-dark" type="button" id="dropdown-total-sales" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                            <FontAwesomeIcon icon={faEllipsis} className='h5 m-0' />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-total-sales"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='d-xl-block d-lg-block d-md-block d-none'>
                                <LineChart width={450} height={300} data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col-xl-7 col-lg-7 col-md-12 col-12 mb-3'>
                    <div className='card border-0 shadow p-4'>
                        <div className='card-title mt-2'>
                            Using Storage <b>1775.06 MB</b> of 2 GB
                        </div>
                        <div class="progress my-3">
                            <div class="progress-bar" role="progressbar" aria-label="Segment one" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-info" role="progressbar" aria-label="Segment two" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-success" role="progressbar" aria-label="Segment three" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="row g-0 " style={{ fontWeight: "500" }}>
                            <div class="col-auto d-flex align-items-center pe-3"><span class="dot bg-primary"></span><span>Regular</span></div>
                            <div class="col-auto d-flex align-items-center pe-3"><span class="dot bg-info"></span><span>System</span></div>
                            <div class="col-auto d-flex align-items-center pe-3"><span class="dot bg-success"></span><span>Shared</span></div>
                            <div class="col-auto d-flex align-items-center"><span class="dot bg-200"></span><span>Free</span></div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-12 col-12 mb-3'>
                    <div className='card h-100 border-0 shadow'>
                        <div class="card-body position-relative p-3" style={{ backgroundImage: `url(${corner_bg})` }}>
                            <h5 class="text-warning">Running out of your space?</h5>
                            <p class="small mb-0">Your storage will be running out soon. Get more space and powerful productivity features.</p>
                            <a class="btn btn-link fw-bold text-warning mt-lg-3 ps-0" href="#!">Upgrade storage</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin