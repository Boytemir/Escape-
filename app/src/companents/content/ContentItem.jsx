import React from 'react';


const ContentItem = (props) => {
  return (
    <div className='content-item'>
       <h1>{props.id}</h1>
       <div className="content-item__card">
          <p>{props.userid}. </p>
          <p>{props.title}</p>
       </div>
       <span>{props.completed}</span>
       
    </div>
  )
}

export default ContentItem