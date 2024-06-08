import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

function App() {

  const [selectedTab, setSelectedTab] = useState('Create Post');
/*
 const handleSidebarButton = (e) => { 

  console.log(e.target.innerHTML)
  if(e.target.innerHTML === 'Create Post'){
  setSelectedTab("Create Post")
 } else if( e.target.innerHTML === 'Home'){
  setSelectedTab('Home')
 }
  
 } */
   
  return (
  
    <div className='app-container'>
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}  />
   <div className="content">
   <Header/>
   {selectedTab === 'Home' ? (<PostList/>) : (<CreatePost/>)}
   <Footer/>
   </div>
   </div>

  )
}

export default App
