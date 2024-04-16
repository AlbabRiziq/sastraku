import Link from "next/link";

type CardProps = {
  title: string;
  author: string;
  desc: string;
  id: string;
  img: string
};

function Card({ title, author, desc, id, img }: CardProps) {
  return (
    <div className="card w-80  lg:h-[500px]  bg-base-100 shadow-xl bg-transparent border m-5 relative border-[#092635]">
      <div className="card-body p-7">
        <img src={img} alt="" className="w-full rounded-2xl" />
        <div>
          <h2 className="card-title -mb-1">{title}</h2>
          <h4 className="italic">{author}</h4>
          <p className="text-sm text-justify">{desc.slice(0, 200) + "..."}</p>
          <div className="card-actions justify-end">
            <Link href={"/preview/" + id}><p className="btn bg-[#092635] text-[#9ec8ba]">BACA</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
