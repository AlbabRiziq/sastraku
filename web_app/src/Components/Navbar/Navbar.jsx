// import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed bottom-0 right-0 w-screen left-0 text-white flex items-center justify-center">
      <div className="bg-[#092635] w-full flex items-center justify-evenly p-5 rounded-t-lg">
        <a href="/">
          <svg
            className="w-6"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.477783 18.1982V6.65641L8.17233 0.885498L15.8669 6.65641V18.1982H10.096V11.4655H6.24869V18.1982H0.477783Z"
              fill="#9EC8BA"
            />
          </svg>
        </a>

        <a href="">
          <svg
            className="w-6"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.87885 12.8839C8.87885 11.7793 7.98342 10.8839 6.87885 10.8839H2.16849C1.42728 10.8839 0.826416 10.2831 0.826416 9.54185C0.826416 8.80064 1.42728 8.19977 2.16849 8.19977H6.87885C7.98342 8.19977 8.87885 7.30434 8.87885 6.19977V1.48941C8.87885 0.748206 9.47972 0.147339 10.2209 0.147339C10.9621 0.147339 11.563 0.748205 11.563 1.48941V6.19977C11.563 7.30434 12.4584 8.19977 13.563 8.19977H18.2734C19.0146 8.19977 19.6154 8.80064 19.6154 9.54185C19.6154 10.2831 19.0146 10.8839 18.2734 10.8839H13.563C12.4584 10.8839 11.563 11.7793 11.563 12.8839V17.5943C11.563 18.3355 10.9621 18.9364 10.2209 18.9364C9.47972 18.9364 8.87885 18.3355 8.87885 17.5943V12.8839Z"
              fill="#9EC8BA"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
