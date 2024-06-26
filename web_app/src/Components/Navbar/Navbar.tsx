// import Link from "next/link";
import Image from 'next/image';
import homeImg from '../../assets/img/home.svg'
import createImg from '../../assets/img/create.svg'
import searchImg from '../../assets/img/search.svg'
import profileImg from '../../assets/img/profile.svg'
import Link from 'next/link';

function Navbar() {
  return (
    <div className="fixed bottom-0 right-0 w-screen left-0 text-white flex items-center justify-center z-50 print:hidden">
      <div className="bg-[#092635] w-full flex items-center justify-evenly p-5 rounded-t-lg">
        <Link href="/">
          <Image
            alt='home'
            src={homeImg}
          />
        </Link>
        <Link href="/cari">
          <Image
            alt='cari'
            src={searchImg}
          />
        </Link>
        <Link href="/create">
          <Image
            alt='buat'
            src={createImg}
          />
        </Link>
        <Link href="/profile">
          <Image
            alt='profil'
            src={profileImg}
          />
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
