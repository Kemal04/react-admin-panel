import React, { useContext } from 'react'

//ROUTER
import { Outlet, Navigate, Routes, Route } from 'react-router-dom'

//PAGES
import Login from './pages/auth/Login'
import Admin from './pages/admin/Admin'

//CONTEXT
import { AuthContext } from './context/AuthContext'

//COMPONENTS
import { Navbar, ScrollToTop, Sidebar } from './components'

const App = () => {

    const { currentUser } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
                    <Route path='/' index element={<Admin />} />
                </Route>

                <Route path='/login' index element={<Login />} />
            </Routes>

        </>
    )
}

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <nav id='sidebarMenu' className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <Sidebar />
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div >
        </>
    );
};

export default App