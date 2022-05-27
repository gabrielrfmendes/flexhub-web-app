import './App.css';
import View1 from './views/View1';
import AuthenticationContext from './contexts/AuthenticationContext';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';



function App() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthenticated(true);
        }
    }, []);

    return (
        <div className='App'>
            <AuthenticationContext.Provider value={{ authenticated }}>
                <Routes>
                    <Route path='/' element={<View1 />} />
                </Routes>
            </AuthenticationContext.Provider>
        </div>
    )
}

export default App
