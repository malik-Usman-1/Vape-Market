import React from 'react'
import { five } from '../Data'
import Card5 from '../Cards/Card5'

const Blog2 = () => {
  return (
    <>
    <div>
      <div className=' bg-black sm:px-10 px-5 py-24 '>
        <div className=' flex flex-wrap  gap-8 justify-center'>
            {five.map((ele)=>{
                return(
                    <Card5 Data={ele}/>
                )
            })}
        </div>
      </div>
    </div>
    </>

  )
}

export default Blog2
