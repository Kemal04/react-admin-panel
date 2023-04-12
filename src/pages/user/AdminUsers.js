import React from 'react'
import user_icon from '../../assets/icons/user.jpg'

const AdminUsers = () => {
    return (
        <>
            <div className='card border-0 shadow mt-5'>
                <div className='card-header p-3'>
                    <div className='row align-items-center'>
                        <div className='col-xl-6'>
                            <div className='h5'>Users (505)</div>
                        </div>
                        <div className='col-xl-3 d-flex justify-content-end'>
                            <input class="form-control form-control-sm" type="text" placeholder="Search..." />
                        </div>
                        <div className='col-xl-3 d-flex justify-content-end'>
                            <select class="form-select form-select-sm ms-2" aria-label=".form-select-sm example">
                                <option selected="selected">All followers</option>
                                <option>Concert Choir</option>
                                <option>Clubchem</option>
                                <option>Chamber Music Society</option>
                                <option>Alpha Chi Omega</option>
                                <option>Alpine Ski Club</option>
                                <option>Career Club</option>
                                <option>Musical Club</option>
                                <option>Asymptones</option>
                                <option>Clubchem</option>
                                <option>Brain Trust</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='card-body p-3'>
                    <div className='row justify-content-between aling-items-center'>
                        <div className='col-xl-3 text-center mb-4 border-bottom pb-3'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                        <div className='col-xl-3 text-center mb-4 border-bottom pb-3'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                        <div className='col-xl-3 text-center mb-4 border-bottom pb-3'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                        <div className='col-xl-3 text-center mb-4 border-bottom pb-3'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                        <div className='col-xl-3 text-center mb-4'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                        <div className='col-xl-3 text-center mb-4'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                        <div className='col-xl-3 text-center mb-4'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                        <div className='col-xl-3 text-center mb-4'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                        <div className='col-xl-3 text-center mb-4'>
                            <img src={user_icon} alt="" className='img-fluid rounded-circle mb-2' style={{ width: "100px" }} />
                            <div className='text-primary'>Kemal Hojayew</div>
                            <div className='small'>kemalhojayew04@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsers