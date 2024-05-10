import Link from "next/link"
import dbConnect from "../../../lib/dbConnect"
import User from "../../../Models/User"

const getData = async () => {
    await dbConnect()
    const res = await User.find({})
    const data = res

    return data
}

async function Page() {


    const users = await getData()




    return (
        <div className="w-screen">
            <div className="w-full max-w-4xl">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>USERNAME</th>
                                <th>NAMA LENGKAP</th>
                                <th>EMAIL</th>
                                <th>LIHAT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.nama_lengkap}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link href={`/user/${user.username}`}>
                                            <div className="btn btn-primary">Lihat</div>
                                        </Link>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Page;
