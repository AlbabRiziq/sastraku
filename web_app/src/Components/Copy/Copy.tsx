function Copy({ title }) {


    return (
        <button className="btn text-xs px-12 bg-[#092635] text-[#9ec8ba] mt-5" onClick={handleClick}>
            {title}
        </button>
    );
}

export default Copy;