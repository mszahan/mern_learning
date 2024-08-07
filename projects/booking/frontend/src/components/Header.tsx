import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-700 py-6 px-5">
      <div className="containe mx-auto flex justify-between">
        <span className="text-3xl text-white  font-bold tracking-tight">
          <Link to="/">LoopersIT</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center text-white hover:text-slate-900 px-3 font-bold hover:bg-gray-100 rounded-md"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
