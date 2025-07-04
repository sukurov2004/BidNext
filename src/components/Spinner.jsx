import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
function Spinner() {
  return (
        <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#00df9a" size={50} />
    </div>

  )
}

export default Spinner