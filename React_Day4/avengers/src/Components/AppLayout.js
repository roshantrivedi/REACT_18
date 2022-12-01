import React from 'react'
import CardComponent from './CardComponent'
import { data } from '../data';

export default function AppLayout() {
  return (
    <div id='applayout' className='applayout-class'>
        <CardComponent avenger={data[0]} />
        <CardComponent avenger={data[1]} />
        <CardComponent avenger={data[2]} />
        <CardComponent avenger={data[3]} />
        <CardComponent avenger={data[4]} />
        <CardComponent avenger={data[5]} />
        <CardComponent avenger={data[6]} />
        <CardComponent avenger={data[7]} />
        <CardComponent avenger={data[8]} />
        <CardComponent avenger={data[9]} />
    </div>
  )
}

// export default function AppLayout() {
//     return (
//         data.map((i, index)=>(
//             <CardComponent avenger={i} key={index} />
//         ))
//     )
// }

/*
The index is used inside map() method to state the position of each element in an array,
but it doesn’t change the original array. If we don't provide index, it will give us warning.
 */