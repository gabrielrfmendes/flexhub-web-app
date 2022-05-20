import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import View from './components/View';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';

function App() {
    return (
        <div className='App'>
            <Sidebar />
            <View>
                <Header />
                <Routes>
                    <Route path='/view-1' element={<View1 />} />
                    <Route path='/view-2' element={<View2 />} />
                    <Route path='/view-3' element={<View3 />} />
                </Routes>
            </View>
        </div>
    )
}

export default App
