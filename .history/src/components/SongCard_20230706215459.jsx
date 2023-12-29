import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import {playPause, setActiveSongs} from "../redux/features/playerSlice"

const SongCard = ({isPlaying,activeSong,data,song,i}) => {
  console.log("card",song.trackMetadata,song,i)

  const handlePauseClick = ()=>{

  }

  const handlePlayClick = ()=>{
    
  }

  return(
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
  <div className="relative w-full h-56 group">
    <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.trackMetadata?.trackName? `flex bg-black bg-opacity-70`:`hidden`}`} >
      <PlayPause song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick}
        activeSong={activeSong}
      />
    </div>
    <img alt='song_imh' src={song.trackMetadata?.displayImageUri} />
  </div>
  <div className="mt-4 flex flex-col">
  <p className="font-semibold text-lg text-white truncate">
    <Link to={`/songs/${song?.key}`}>{song.trackMetadata?.trackName}</Link>
  </p>
  <p className="text-sm truncate text-gray-300 mt-1">
    <Link to={song.trackMetadata.artists?`/artists/${song.trackMetadata.artists[0]?.spotifyUri}`:`/top-artists`}>{song.trackMetadata.artists[0]?.name}{song.trackMetadata.artists[1]?.name}{song.trackMetadata.artists[2]?.name}
    {song.trackMetadata.artists[3]?.name}</Link>
  </p>

  </div>
  </div>
)};

export default SongCard;
