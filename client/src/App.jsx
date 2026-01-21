import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/students/Home';
import CourseList from './pages/students/CourseList';
import CourseDetails from './pages/students/CourseDetails';
import Player from'./pages/students/Player';
import MyEnrollments from './pages/students/MyEnrollments';
import Loading from './components/students/Loading';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route  path='/course-list' element={<CourseList/>}/>
        <Route  path='/course-list:input' element={<CourseList/>}/>
        <Route  path='/course/:id' element={<CourseDetails/>}/>
        <Route  path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route  path='/player/:courseId' element={<Player/>}/>
        <Route  path='/loading/:path' element={<Loading />}/>
      </Routes>
    </div>
  )
}

export default App

