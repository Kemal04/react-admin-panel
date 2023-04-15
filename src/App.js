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
import AdminUserCreate from './pages/user/AdminUserCreate'

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
                    <Route path='/users' element={<AdminUsers />} />
                    <Route path='/user/create' element={<AdminUserCreate />} />
                </Route>

                <Route path='/login' index element={<Login />} />
            </Routes>

        </>
    )
}

const Layout = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-dark" : "bg-main"}`}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <nav id='sidebarMenu' className="col-xl-2 col-lg-2 col-md-2 d-md-block position-fixed collapse" style={darkMode ? { backgroundColor: "#212529", zIndex: "100" } : { backgroundColor: "#edf2f9", zIndex: "100" }}>
                        <Sidebar />
                    </nav>

                    <main className="col-xl-9 col-lg-9 col-md-9 ms-sm-auto px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div >
        </div >
    );
};

export default App