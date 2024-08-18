import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import NoteCard from '../../components/Cards/NoteCard';
const Home = () => {
  return (
    <div>
      <Navbar/>

      <div className='container mx-auto'></div>
      <div className='grid grid-cols-3 gap-4 mt-8'>
        <NoteCard title="Meeting on 20th Aug" date="20-Aug-2023" content="intern meeting"

        tags="Meeting" inPinned={true} onEdit={()=>{}}
        onDelete={()=>{}} onPinNote={()=>{}}
        

      />
      
      </div>

    </div>
    

    
  )
}

export default Home;
