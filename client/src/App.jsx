import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Trainers from './components/trainers/Trainers'
import Workouts from './components/workouts/Workouts'
import Banner from './components/banner/Banner'
import Schedule from './components/schedule/Schedule'
import Comments from './components/comments/Comments'

function App() {

	return (
		<>
			<Header />

			<Banner />

			<Workouts />

			<Schedule />

			<Trainers />

			<Comments />

			<Footer />
		</>
	)
}

export default App
