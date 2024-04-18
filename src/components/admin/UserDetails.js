const UserDetails = () => {
    return (
        <div className="mx-auto max-w-lg p-4 border shadow-xl m-3">
            <div className="text-center">
                <h2 className="font-semibold text-2xl">User Details</h2>
            </div>
            <div className="flex flex-col items-center mt-4">
                <div className=" flex gap-2 mb-2">
                    <h3 className="font-semibold">Name:</h3>
                    <p className="text-gray-800">John Doe</p> 
                </div>
                <div className="flex gap-2 mb-2">
                    <h3 className="font-semibold">Email:</h3>
                    <p className="text-gray-800">john@example.com</p> 
                </div>
                <div className="flex gap-2 mb-2">
                    <h3 className="font-semibold">Phone No:</h3>
                    <p className="text-gray-800">123-456-7890</p> 
                </div>
            </div>
            <div className="mt-8">
                <table className="w-full border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 p-2">Ticket ID</th>
                            <th className="border border-gray-400 p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="border border-gray-400 p-2">100000000000000</td>
                            <td className="border border-gray-400 p-2">Resolved</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 p-2">2000000000</td>
                            <td className="border border-gray-400 p-2">Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDetails;
