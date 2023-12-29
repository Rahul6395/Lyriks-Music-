import { Error, Loader, SongCard } from "../components";
import { useDispatch,useSelector } from "react-redux";
import { genres } from "../assets/constants"
import { useGetTopChartsQuery } from "../redux/services/shazamCore"

const Discover = () => {

const dispatch = useDispatch();
const { activeSong, isPlaying } = useSelector((state)=>state.player);

    const { data, isFetching, error } = useGetTopChartsQuery();
    console.log(data)
    if(isFetching) return <Loader title="Loading Songs..."/>;
    if(error) return <Error/>

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover { }</h2>
                <select onChange={() => { }} value=''
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.trackMetadata?.trackName}
                        song={song}
                        i={i}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                    />
              
                ))}
            </div>

        </div>
    )
}

export default Discover;
