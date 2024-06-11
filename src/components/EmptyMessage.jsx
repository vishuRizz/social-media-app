import React from 'react'

function EmptyMessage({handleApiButton}) {
  return (
    <center>
    <div className='empty-message'>
      <h1>THERE ARE NO POSTS YET, KINDLY GO TO THE CREATE POST OPTION TO CREATE YOUR POSTS</h1>
      <button type="button" onClick={handleApiButton} className="m-3 btn btn-info ">FETCH DATA-POSTS FROM API</button>
    </div>
    </center>
  )
}

export default EmptyMessage
