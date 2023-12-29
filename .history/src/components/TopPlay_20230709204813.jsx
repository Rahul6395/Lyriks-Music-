import { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import {SwiperSlide,Swiper} from "swiper/react"
import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';


const TopChartCard = ({song,i,isPlaying,handlePauseClick,handlePlayClick,activeSong})=>(
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
   <h3 className="font-bold text-base text-white mr-3">{i+1}.</h3>
   <div className="flex-1 flex flex-row justify-between items-center">
 <img src={song?.images?.coverart} alt={song?.title} className=" rounded-lg" style={{width:"4rem",height:"4rem"}}/>
 <div className="flex-1 flex flex-col justify-center mx-3">
 <Link  to={`/songs/${song.key}`}>
  <p className="text-base font-bold text-white truncate">{song?.title}</p>
 </Link>
 <Link  to={`/artists/${song?.artists[0].adamid}`}>
  <p className="text-base text-gray-300 mt-1 truncate">{song?.subtitle}</p>
 </Link>
 </div>
   </div>
   <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick}/>
  </div>
)


const TopPlay = () => {
  const divRef = useRef(null);
  const dispatch = useDispatch();
  const {activeSong,isPlaying} = useSelector((state)=>state.player);
  const {data} = useGetTopChartsQuery();

useEffect(()=>{
  window.HTMLElement.prototype.scrollIntoView = ({behavior:"smooth"});
})

const topPlays = data?.tracks?.slice(0,5);

  const handlePauseClick = ()=>{
    dispatch(playPause(false))
  }

  const handlePlayClick = (song,i)=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true))
  }

  return(
  <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex-col">
  <div className="w-full flex flex-col">
    <div className="flex flex-row justify-between items-center">
    <h2 className="text-white font-bold text-2xl">
      Top Charts
    </h2>
      <Link top="/top-charts">
        <p className="text-gray-300 text-base cursor-pointer">See more</p>
      </Link>
    </div>

    <div className="mt-3">
      {topPlays?.map((song,i)=>(
        <TopChartCard key={song.key} song={song} i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={()=>handlePlayClick(song,i)}
        />
      ))}
    </div>
  </div>

  <div className="w-full flex flex-col mt-8">
    <div className="flex flex-row justify-between items-center">
    <h2 className="text-white font-bold text-2xl">
      Top Charts
    </h2>
      <Link top="/top-artists">
        <p className="text-gray-300 text-base cursor-pointer">See more</p>
      </Link>
    </div>
    <Swiper
    slidesPerView = "auto"
    spaceBetween={15}
    freeMode
    centeredSlides
    centeredSlidesBounds
    modules={[FreeMode]}
    className="mt-4"
    >
    {topPlays?.map((song,i)=>(
      <SwiperSlide
        key={song?.key}
        style={{width:"25%",height:"auto"}}
        className="shadow-lg rounded-full animate-slideright"
      >
      <Link to={`/artists/${song?.artists[0].adamid}`}>
      <img className="rounded-full w-full object-cover" alt='top_artists' src={song?.images?.background} />
      </Link>
      </SwiperSlide>
    ))}
    </Swiper>
    
    </div>

  </div>
)};

export default TopPlay;
