"use client"

import Card from "../../../Components/Card/Card"

export default function Page({ params }: { params: { username: string } }) {
    return (
        <main className="flex flex-col items-center justify-center p-5 text-[#092635]">
            <h1 className="font-bold text-xl">RIZIQ LILI ULIL ALBAB</h1>
            <h2 className="italic">@{params.username}</h2>
            <p className="italic text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias.</p>
            <a className="btn mt-2 bg-[#092635] text-white px-9">
                TOTAL KARYA
                <div className="badge">99</div>
            </a>

            <div className="mt-5 flex flex-col items-center pt-5">
                <h1 className="font-bold text-xl">KARYA</h1>
                <div className="mt-10 flex flex-wrap items-center justify-evenly gap-4">
                    {/*  */}
                    <div className="card card-compact w-60 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#092635] text-white" >Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-60 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#092635] text-white" >Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-60 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#092635] text-white" >Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-60 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#092635] text-white" >Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-60 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#092635] text-white" >Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-60 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#092635] text-white" >Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </main>
    )
}