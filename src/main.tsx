import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BaseProvider } from './provider/BaseProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BaseProvider>
			<App />
		</BaseProvider>
	</StrictMode>
)
