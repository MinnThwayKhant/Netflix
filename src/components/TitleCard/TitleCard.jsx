import React, { useEffect, useRef } from 'react'
import cards_data from '../../assets/cards/Cards_data'



export const TitleCard = ({title, category}) => {

  const cardRef = useRef()

  const handleWheel = (e) => {
    e.preventDefault()
    cardRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    cardRef.current.addEventListener('wheel', handleWheel);
  }, [])


  return (
    <div className='my-12'>
      <h2 className='mb-3 text-2xl font-semibold'>
        {title ? title : 'Popular on Netflix'}
      </h2>
      <div className='flex gap-4 overflow-x-scroll card-list h-40' ref={cardRef}>  
        {cards_data.map((card, index) => {
          return <div key={index} className='relative flex-shrink-0'>
            <img src={card.image} alt="Card" className='cursor-pointer w-60 rounded'/>
            <p className='absolute bottom-8 right-2'>{card.name}</p>
          </div>
        })}
      </div>
    </div>

  )
}
