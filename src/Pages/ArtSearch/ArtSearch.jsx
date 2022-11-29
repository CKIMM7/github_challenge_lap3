import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function ArtSearch() {

  const searchValue = useSelector((state) => state.cart.searchValue);
  const searchArray = useSelector((state) => state.cart.searchArray);

  console.log(searchArray);
  return (
    <div>
      <h1>search</h1>
    </div>
  )
}
