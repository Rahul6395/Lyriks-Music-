import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import {playPause, setActiveSongs} from "../redux/features/playerSlice"

const SongCard = ({key,song,i}) => {
  console.log("card",song.trackMetadata,song,i)
  const activeSong = 'Test';
  return(
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
  <div className="relative w-full h-56 group">
    <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title? `flex bg-black bg-opacity-70`:`hidden`}`} >
      <PlayPause/>
    </div>
    <img alt='song_imh' src={song.trackMetadata?.displayImageUri} />
  </div>
  <div className="mt-4 flex flex-col">
  <p className="font-semibold text-lg text-white truncate">
    <Link to={`/songs/${song?.key}`}>{song.trackMetadata?.trackName}</Link>
  </p>
  <p className="text-sm truncate text-gray-300 mt-1">
    <Link>{song.trackMetadata?.trackName}</Link>
  </p>

  </div>
  </div>
)};

export default SongCard;