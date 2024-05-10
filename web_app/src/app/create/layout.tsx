
export const metadata = {
    title: "SASTRAKU | BUAT KARYAMU",
    description: "Cari karya sastra yang kamu sukai disini",
    kewords: "sastra, karya, puisi, cerpen, novel, sastraku, cari, buat karya sastraku"
};

export default function RootLayout({ children }) {
    return (
        <section>
            {children}
        </section>
    );
}
