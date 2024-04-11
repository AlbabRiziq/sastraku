type CardProps = {
  title: string;
  author: string;
  desc: string;
};

function Card({ title, author, desc }: CardProps) {
  return (
    <div className="card w-full  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title -mb-3">{title}</h2>
        <h4 className="italic">{author}</h4>
        <p>{desc.slice(0, 100) + "........"}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-[#092635] text-[#9ec8ba]">BACA</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
