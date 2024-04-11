import Card from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";

// async function getPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return data;
// }

export default function Home() {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Card
            title="JUDUL"
            author="Albab"
            desc="Lorem ipsum , senectus facilisi tempor parturient vitae massa risus, facilisis ultrices duis enim rhoncus rutrum. Penatibus litora ullamcorper nibh cras senectus platea, morbi etiam eleifend tellus cursus, rhoncus arcu facilisi auctor justo. Curabitur nascetur platea ante magnis mi erat malesuada torquent blandit tincidunt, eu nostra diam laoreet varius commodo libero lacinia euismod tortor, integer hac et non fringilla vitae metus risus cursus. Tincidunt quisque nascetur neque odio eleifend metus augue nec dictum, eros suspendi"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Card
            title="JUDUL"
            author="Albab"
            desc="Lorem ipsum , senectus facilisi tempor parturient vitae massa risus, facilisis ultrices duis enim rhoncus rutrum. Penatibus litora ullamcorper nibh cras senectus platea, morbi etiam eleifend tellus cursus, rhoncus arcu facilisi auctor justo. Curabitur nascetur platea ante magnis mi erat malesuada torquent blandit tincidunt, eu nostra diam laoreet varius commodo libero lacinia euismod tortor, integer hac et non fringilla vitae metus risus cursus. Tincidunt quisque nascetur neque odio eleifend metus augue nec dictum, eros suspendi"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
