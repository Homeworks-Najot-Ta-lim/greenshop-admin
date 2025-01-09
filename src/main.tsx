
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AuthContext } from './context/Context.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(

    <AuthContext>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthContext>

)
