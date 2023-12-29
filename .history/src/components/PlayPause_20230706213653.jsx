import {FaPauseCircle,FaPlayCircle} from "react-icons"

const PlayPause = ({isPlaying,activeSong,song,handlePauseClick,handlePlayClick}) => ( 
  isPlaying && activeSong?.title === song.trackMetadata?.trackName ? 
  (<FaPauseCircle/>) 
  :
  (<FaPlayCircle/>)
);

export default PlayPause;
 