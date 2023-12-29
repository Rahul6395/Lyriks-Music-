import {FaPauseCircle,FaPlayCircle} from "react-icons/fa"

const PlayPause = ({isPlaying,activeSong,song,handlePauseClick,handlePlayClick}) => {
  return( 
    <>
 { isPlaying && activeSong?.title === song.trackMetadata?.trackName ? 
  <FaPauseCircle/>
  :
  <FaPlayCircle/>}
  </>
)};

export default PlayPause;
 