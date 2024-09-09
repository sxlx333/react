import { StrictMode } from 'react'; // reikia kabletaskiu
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(  // susirandamas id root pagal div index html
  <StrictMode>
    <App />             {/* panasu i html cia yra JSX (JavaScript XML syntax) */}
  </StrictMode>,         {/* niekada neistrinti StrictMode nes nematomi bug'ai */}
);
