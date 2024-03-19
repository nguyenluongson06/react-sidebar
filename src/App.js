import './App.css';
import './css/sidebar.css';
import { Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import FollowMe from './components/FollowMe';
import Services from './components/Services';
import Team from './components/Team';
import Works from './components/Works';
import * as Icon from 'react-bootstrap-icons';

const App = () => {
	return (
		<main>
			<div
				className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'
				style={{ width: '280px', height: '100%' }}>
				<Link
					className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'
					to='/'>
					React Router App
				</Link>
				<ul className='nav nav-pills flex-column mb-auto'>
					<li className='nav-item'>
						<Link className='nav-link text-white' to='/'>
							<Icon.HouseFill className='bi me-2' width={16} height={16} />
							Home
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link text-white' to='/about'>
							<Icon.InfoLg className='bi me-2' width={16} height={16} />
							About
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link text-white' to='/events'>
							<Icon.Calendar3 className='bi me-2' width={16} height={16} />
							Events
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link text-white' to='/team'>
							<Icon.PeopleFill className='bi me-2' width={16} height={16} />
							Team
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link text-white' to='/works'>
							<Icon.SuitcaseLgFill className='bi me-2' width={16} height={16} />
							Works
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link text-white' to='/services'>
							<Icon.GearFill className='bi me-2' width={16} height={16} />
							Services
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link text-white' to='/contact'>
							<Icon.ChatDotsFill className='bi me-2' width={16} height={16} />
							Contact
						</Link>
					</li>

					<li className='nav-item'>
						<Link className='nav-link text-white' to='/follow-me'>
							<Icon.Twitter className='bi me-2' width={16} height={16} />
							Follow me
						</Link>
					</li>
				</ul>
			</div>
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/about' Component={About} />
				<Route path='/events' Component={Events} />
				<Route path='/team' Component={Team} />
				<Route path='/works' Component={Works} />
				<Route path='/services' Component={Services} />
				<Route path='/contact' Component={Contact} />
				<Route path='/follow-me' Component={FollowMe} />
			</Routes>
		</main>
	);
};

export default App;
