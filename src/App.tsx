import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
	const {
		t,
		i18n: { changeLanguage, language }
	} = useTranslation()
	const [currentLanguage, setCurrentLanguage] = useState<string>(language)

	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === 'en' ? 'tr' : 'en'
		setCurrentLanguage(newLanguage)
		changeLanguage(newLanguage)
	}

	return (
		<>
			<div>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={handleChangeLanguage}>Language is {language}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>{t(`react`)}</p>
		</>
	)
}

export default App
