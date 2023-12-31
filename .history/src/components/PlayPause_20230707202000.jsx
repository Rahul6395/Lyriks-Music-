import {FaPauseCircle,FaPlayCircle} from "react-icons/fa"

const PlayPause = ({isPlaying,activeSong,song,handlePlay,handlePause}) => {
  return( 
    <>
 { isPlaying && activeSong?.title === song.trackMetadata?.trackName ? 
  <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause}/>
  :
  <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay}/>}
  </>
)};

export default PlayPause;
 