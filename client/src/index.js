import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProductsProvider } from './context/ProductsContext'
import ErrorPage from './pages/ErrorPage/ErrorPage'

const rootElement = document.querySelector('#root')
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <ErrorPage>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ErrorPage>
  </BrowserRouter>
)