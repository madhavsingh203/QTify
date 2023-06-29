
import React from 'react'
import NavBar from '../Navbar/NavBar'
import Homepage from '../Homepage/Homepage'

function Dashboard({data,newAlbumsData}) {
  return (
    <div>
        <NavBar/>
        <Homepage data={data} newAlbumsData={newAlbumsData}/>
        
    </div>
  )
}

export default Dashboard