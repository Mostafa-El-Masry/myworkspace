import React from 'react'

interface Props {
    params: {slug : string[]};
    searchparams :  {sortorder : string}
}
const ProductPage = ({params: { slug } ,searchparams: { sortorder }} : Props) => {

  return (
    <div>ProductPage {slug} {sortorder}</div>
  )
}

export default ProductPage