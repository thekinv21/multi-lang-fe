import { useTranslation } from 'react-i18next'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
	const { t, i18n } = useTranslation()

	function handleChangeToEnglish() {
		i18n.changeLanguage('en')
	}

	function handleChangeToTurkish() {
		i18n.changeLanguage('tr')
	}

	return (
		<>
			<div>
				<a href='#'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='#'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={handleChangeToEnglish}>Change for EN</button>

				<button onClick={handleChangeToTurkish}>Change for TR</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>{t(`react`)}</p>
		</>
	)
}

export default App
