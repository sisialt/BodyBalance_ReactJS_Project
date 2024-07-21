import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import WorkoutsPage from './components/workouts-page/WorkoutsPage'
import OurTeamPage from './components/our-team-page/OurTeamPage'
import PricesPage from './components/prices-page/PricesPage'
import ContactUsPage from './components/contact-us-page/ContactUsPage'
import WorkoutInfo from './components/workouts-page/workout-info/WorkoutInfo'

function App() {

	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/workouts/*' element={<WorkoutsPage />} />
				<Route path='/workouts/:workoutId' element={<WorkoutInfo />} />
				<Route path='/our-team' element={<OurTeamPage />} />
				<Route path='/prices' element={<PricesPage />} />
				<Route path='/contact-us' element={<ContactUsPage />} />
			</Routes>

			<Footer />
		</>
	)
}

export default App
