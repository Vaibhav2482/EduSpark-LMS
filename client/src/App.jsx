import React from 'react'
import { Routes, Route, useMatch } from "react-router-dom";
import Home from './pages/students/Home';
import CourseList from './pages/students/CourseList';
import CourseDetails from './pages/students/CourseDetails';
import Player from './pages/students/Player';
import MyEnrollments from './pages/students/MyEnrollments';
import Loading from './components/students/Loading';
import educator from './pages/Educator/Educator'
import Dashboard from './pages/Educator/Dashboard';
import AddCourse from './pages/Educator/AddCourse';
import Mycourses from './pages/Educator/Mycourses';
import StudentsEnroll from './pages/Educator/StudentsEnroll';
import Educator from './pages/Educator/Educator';
import Navbar from './components/students/Navbar';

const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
            <Route path='educator' element={<Dashboard/>} />            
            <Route path='add-course' element={<AddCourse/>} />            
            <Route path='my-courses' element={<Mycourses/>} />            
            <Route path='student-enrolled' element={<StudentsEnroll/>} />            
        </Route>
      </Routes>
    </div>
  )
}

export default App

