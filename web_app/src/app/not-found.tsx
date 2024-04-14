import Link from 'next/link'
import Navbar from '../Components/Navbar/Navbar'

export default function NotFound() {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">HALAMAN YANG ANDA TUJU TIDAK DITEMUKAN ATAU SUDAH DIHAPUS</h3>
                                <p>Pastikan kamu mengetik url halaman dengan benar</p>
                                <Link href="/" className="link_404">
                                    KEMBALI KE HALAMAN UTAMA
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </section>

    )
}