import LoaderIcon from "../assets/LoaderIcon";

const Loader = () => (
  <div className="w-full flex justify-center flex-col items-center">
  <img src={LoaderIcon} alt="loader" className="w-32 h-32 object-contain" />
  <h1 className="font-bold text-2xl text-white mt-2">{title || "Loading..."}</h1>
  </div>
);

export default Loader;
