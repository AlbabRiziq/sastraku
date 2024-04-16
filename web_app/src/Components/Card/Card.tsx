import Link from "next/link";

type CardProps = {
  title: string;
  author: string;
  desc: string;
  id: string;
  img: string
};

function Card({ title, author, desc, id, img }: CardProps) {

  // console.log(img);

  return (
    <div className="card w-96 bg-base-100 shadow-xl bg-transparent border m-5 relative border-[#092635]">
      <div className="card-body p-7">
        <img src={img != null ? img : `https://placehold.co/600x300?text=${title}`.replace(/ /g, "+")} alt="" className="w-full rounded-2xl h-56 object-cover" />
        <div>
          <h2 className="card-title -mb-1">{title}</h2>
          <h4 className="italic">{author}</h4>
          <p className="text-xs text-justify">{desc.slice(0, 200) + "..."}</p>
          <div className="card-actions justify-end">
            <Link href={"/preview/" + id}><p className="btn bg-[#092635] text-[#9ec8ba]">BACA</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
