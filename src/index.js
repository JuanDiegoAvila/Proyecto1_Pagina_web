import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

/* const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App tab="home" />) */

const container = document.getElementById('app')
hydrateRoot(container, <App />)
