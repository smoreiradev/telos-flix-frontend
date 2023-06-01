import React, { useState } from 'react'
import WatchButton from '../../components/WatchButton'
import RateButton from '../../components/RateButton'
import './index.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Carousel from '../../components/Carosel';
import RateMovieModal from '../../components/RateMovieModal';
import CustomizedProgressBars from '../../components/progressBar';


function MovieDetails() {
    const [open, setOpen] = useState(false);
  return (
    <div className='bodyMovieInformations'>
        <div className='VideoCard'>
            <h1 className='MovieTitle'>
                Nome do Filme</h1>

            <div className='VideoCard__buttons'>
            <WatchButton/>
            <RateButton onClick={() => setOpen(true)}/>
            </div>
        </div>
        <div className='Footer'>
            <div className='RateVideoSection'>
                <h3 className='RateVideoTitle'> <StarOutlinedIcon/> Se liga nessas avaliações</h3>
                <div className='Rates'>
                    <div className='RateVideoNote'>
                        <h1>4.8</h1>
                        <h5>129 avaliações</h5>
                    </div>
                    <div className='RatesStars'>
                            <h5>5 <StarOutlinedIcon sx={{
                                width: "15px",
                                height: "15px",
                            }}/><CustomizedProgressBars value={5*20}/></h5> 
                            <h5>4 <StarOutlinedIcon sx={{
                                width: "15px",
                                height: "15px",
                            }}/><CustomizedProgressBars value={4*20}/></h5> 
                            <h5>3 <StarOutlinedIcon sx={{
                                width: "15px",
                                height: "15px",
                            }}/><CustomizedProgressBars value={3*20}/></h5>  
                            <h5>2 <StarOutlinedIcon sx={{
                                width: "15px",
                                height: "15px",
                            }}/><CustomizedProgressBars value={2*20}/></h5>  
                            <h5>1 <StarOutlinedIcon sx={{
                                width: "15px",
                                height: "15px",
                            }}/><CustomizedProgressBars value={1*20}/></h5>  
                    </div>
                </div>
            </div>
            <div className='CommentsCarrosel'>
                  <Carousel/>              
            </div>
        </div>
        <RateMovieModal open={open} setOpen={setOpen}/>
    </div>
  )
}

export default MovieDetails