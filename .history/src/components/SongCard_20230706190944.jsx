import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import {playPause, setActiveSongs} from "../redux/features/playerSlice"

const SongCard = ({key,song,i}) => {
  console.log("card",key,song,i)
  return(
  <div>SongCard</div>
)};

export default SongCard;
