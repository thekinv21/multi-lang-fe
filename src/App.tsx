import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
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
				<button>Change Language</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>{'Language is:'}</p>
		</>
	)
}

export default App
