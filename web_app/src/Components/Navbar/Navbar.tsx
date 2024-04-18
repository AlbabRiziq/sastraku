// import Link from "next/link";
import Image from 'next/image';
import homeImg from '../../assets/img/home.svg'
import createImg from '../../assets/img/create.svg'


function Navbar() {
  return (
    <div className="fixed bottom-0 right-0 w-screen left-0 text-white flex items-center justify-center z-50">
      <div className="bg-[#092635] w-full flex items-center justify-evenly p-5 rounded-t-lg">
        <a href="/">
          <Image
            alt='home'
            src={homeImg}
          />
        </a>
        <a href="/create">
          <Image
            alt='create'
            src={createImg}
          />
        </a>
        {/* <a href="/profile">
          <Image
            alt='create'
            src={profileImg}
          />
        </a> */}
      </div>
    </div>
  );
}

export default Navbar;
