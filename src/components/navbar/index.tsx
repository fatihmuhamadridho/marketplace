import { Link } from "react-router-dom";

// import iconoir_search from "@public/images/icons/iconoir_search.svg"
// import iconoir_heart from "@public/images/icons/iconoir_heart.svg"
// import iconoir_user from "@public/images/icons/iconoir_user.svg"

const Navbar = () => {
  return (
    <div className="py-[27px] px-8 bg-primary drop-shadow-[0px_4px_14px_rgba(0,0,0,0.25)]">
      <div className="max-w-[1022px] mx-auto flex justify-between items-center text-[white] space-x-4">
        <Link to={"/"}>
        <img src="/favicon.ico" alt="" width={40} height={25} />
        </Link>
        <div className="font-medium space-x-8">
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/about"}>About</Link>
        </div>
        <div className="flex space-x-7">
            <img src={"/images/icons/iconoir_search.svg"} alt="" width={20} height={20} />
            <img src={"/images/icons/iconoir_heart.svg"} alt="" width={20} height={20} />
            <img src={"/images/icons/iconoir_user.svg"} alt="" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
