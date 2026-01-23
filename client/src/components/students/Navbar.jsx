import { Link, useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const location = useLocation()
  const isCourseListPage = location.pathname.includes('/course-list')

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 
      border-b border-gray-500 py-4 
      ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <span className="text-blue-600">Edu</span>
        <span className="text-orange-500">Spark</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <button>Become Educator</button>
        <Link to="/my-enrollments"> My Enrollments</Link>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Create Account
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-4 text-gray-500">
        <div><button>Become Educator |</button>

          <Link to="/my-enrollments">My Enrollments</Link>
        </div>
        <button> <FontAwesomeIcon icon={faAddressCard} size="lg" /> </button>
      </div>
    </div>
  )
}

export default Navbar
