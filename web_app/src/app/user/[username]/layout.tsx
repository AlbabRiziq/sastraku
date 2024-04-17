import Navbar from "../../../Components/Navbar/Navbar";

export default function DashboardLayout({ params, children }: { params: { id: string }, children: React.ReactNode }) {

    return (
        <section>
            {children}
        </section>
    )
}