import React from 'react'
import rateButton from '../rateButton'
import './index.css'
import CommentCard from '../CommentCard'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import RateMovieModal from '../rateMovieModal'

const ArrayComment = [{
  user: "Paula Rust",
  comment: "Legal",
  rate: '3.0',
},
{
user: "Paula Rust",
comment: "Bom, Porém não gostei da parte que mataram o principal!",
rate: '4.5',
},
{
user: "Pedro Fernandes",
comment: "Não Gostei",
rate: '1.0',
},
{
  user: "Andre Willian",
  comment: "Bacana",
  rate: '4.0',
  },
{
  user: "Gustavo Borges",
  comment: "Adorei!",
  rate: '5.0',
  },
]


function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)
  const [open, setOpen] = useState(false);

  useEffect(() => {
      console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth + 120)
  }, []);

  return (
    <div className='Carousel' ref={carousel}>
        <div>
        <rateButton onClick={() => setOpen(true)}/>
        </div>
        <motion.div  className='CommentCardCarousel' whileTap={{cursor: "grabbing",}} drag="x" dragConstraints={{ right: 0, left: -width}}>
          {ArrayComment.map(comments => (
            <CommentCard user={comments.user}
            comment={comments.comment}
            rate={comments.rate}/>
            ))} 
        </motion.div >
        <RateMovieModal open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Carousel;