import { Montserrat } from "next/font/google";
import Navbar from "../../../Components/Navbar/Navbar";
import dbConnect from "../../../lib/dbConnect";
import Content from "../../../Models/Content";
import dynamic from "next/dynamic";
const montserrat = Montserrat({ subsets: ["latin"] });
import parse from 'html-react-parser';

async function getData(id: string) {
    dbConnect()

    try {
        const content = await Content.findOne({ content_id: id })

        return content;
    } catch {
        return null;
    }
}



export default async function Page({ params }: { params: { id: string } }) {
    const data = await getData(params.id);
    const title: String = data.content_title;
    const content = data.value;
    const author: String = data.author;

    console.log(typeof content);



    return (
        <div className="pb-24">
            <div className="text-center p-10 max-w-4xl m-auto">
                <h1 className="mt-5 text-[#092635] font-bold text-lg">{title.toUpperCase()}</h1>
                <h3 className="italic mb-10">{author.toLocaleUpperCase()}</h3>
                <div className={montserrat.className}>
                    {parse(content)}
                </div>
            </div>
            <Navbar />
        </div>
    );

}