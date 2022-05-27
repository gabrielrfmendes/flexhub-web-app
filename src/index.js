import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';
import Steps from './views/Steps';
import Step from './views/Step';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/steps' element={<Steps />}>
                    <Route path=':stepId' element={<Step />} />
                </Route>
                <Route
                    path='*'
                    element={
                        <main>
                            <h1>Não tem nada pra você aqui! Vá embora!</h1>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// Se você quiser começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar resultados (por exemplo: reportWebVitals(console.log))
// ou enviar para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
