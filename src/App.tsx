import i18next from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
	const { t } = useTranslation()

	const [language, setLanguage] = useState<string>('tr')

	function handleChangeLang(lang: string) {
		setLanguage(lang)
		i18next.changeLanguage(`${lang}`)
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
				<button
					onClick={() => handleChangeLang(`${language === 'tr' ? 'en' : 'tr'}`)}
				>
					Language is {language}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>{t('react')}</p>
		</>
	)
}

export default App
