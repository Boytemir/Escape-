import React from 'react'
import ContentItem from './ContentItem';
import Api from '../Api';
import '../style/style.css'

const Content = () => {
  return (
    <div className='content'>
        {
            Api.map(api => {
               return   <ContentItem id={api.id} userid = {api.userId} title = {api.title} completed = {api.completed} key = {api.id}/>
            })
        }

    </div>
  )
}

export default Content