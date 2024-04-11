import Card from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";
import dbConnect from "../lib/dbConnect";
import Content from "../Models/Content";


async function getAllPost() {
  await dbConnect()

  try {
    const res = await Content.find()
    return res
  } catch (err) {
    return
  }


}

export default async function Home() {

  const data: Object[] = await getAllPost()



  return (
    <div className="bg-[#9ec8ba]">
      <div className="carousel w-full">
        {/* <div id="slide1" className="carousel-item relative w-full">
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
        </div> */}

        {data.map((item: any, index) => {
          return (
            <div id={`slide${index}`} className="carousel-item relative w-full" key={index}>
              <Card
                id={item.content_id}
                title={item.content_title}
                author={item.author}
                desc={item.content_description}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index - 1}`} className="btn btn-circle bg-transparent">
                  ❮
                </a>
                <a href={`#slide${index + 1}`} className="btn btn-circle bg-transparent">
                  ❯
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <Navbar />
    </div>
  );
}
