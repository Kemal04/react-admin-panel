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
import { ThemeContext } from './context/ThemeContext'
import AdminUsers from './pages/user/AdminUsers'

const App = () => {

    const { currentUser } = useContext(AuthContext);
    const { darkMode } = useContext(ThemeContext)

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
                <Route path='/' element={<ProtectedRoute><Layout darkMode={darkMode} /></ProtectedRoute>} >
                    <Route path='/' index element={<Admin />} />
                    <Route path='/users' index element={<AdminUsers />} />
                </Route>

                <Route path='/login' index element={<Login />} />
            </Routes>

        </>
    )
}

const Layout = ({darkMode}) => {
    console.log(darkMode);
    return (
        <div className={`${darkMode ? "bg-dark" : "bg-main"}`}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <nav id='sidebarMenu' className="col-md-3 col-lg-2 d-md-block sidebar collapse">
                        <Sidebar />
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div >
        </div >
    );
};

export default App