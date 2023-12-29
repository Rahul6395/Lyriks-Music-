import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import {SwiperSlide,Swiper} from "swiper/react"
import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
  const divRef = useRef(null);
  const useDispatch = useDispatch();
  const {activeSong,isPlaying} = useSelector((state)=>state.player);
  const {data} = useGetTopChartsQuery();

useEffect(()=>{
  divRef.current.ScrollIntoView({behavior:"smooth"});
})

const topPlays = data?.slice(0,5);

  const handlePauseClick = ()=>{
    dispatch(playPause(false))
  }

  const handlePlayClick = ()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true))
  }

  return(
  <div ref={divRef}>

  </div>
)};

export default TopPlay;
