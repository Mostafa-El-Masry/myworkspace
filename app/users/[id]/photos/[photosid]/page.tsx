import React from 'react'

interface Props { 
  params : { id : number; photoid : number; } 
}

const PhotosDetails = ({params : { id , photoid } } :Props) => {
  return (
    <div>PhotosDetails { id } { photoid }</div>
  )
}

export default PhotosDetails