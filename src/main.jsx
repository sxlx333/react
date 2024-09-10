import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render( // susirandamas id root pagal div index html
  <StrictMode> {/* panasu i html cia yra JSX (JavaScript XML syntax) */}
    <App />
  </StrictMode>, {/* niekada neistrinti StrictMode nes nematomi bug'ai */}
);
