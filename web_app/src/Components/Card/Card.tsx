import Link from "next/link";

type CardProps = {
  title: string;
  author: string;
  desc: string;
  id: string;
};

function Card({ title, author, desc, id }: CardProps) {
  return (
    <div className="card w-full  bg-base-100 shadow-xl bg-transparent border m-5" >
      <div className="card-body">
        <h2 className="card-title -mb-3">{title}</h2>
        <h4 className="italic">{author}</h4>
        <p>{desc.slice(0, 100) + "........"}</p>
        <div className="card-actions justify-end">
          <Link href={"/preview/" + id}><p className="btn bg-[#092635] text-[#9ec8ba]">BACA</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
