const AdminTechSupport = () => {
    return (
        <div className="flex justify-center m-4">
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-400 p-2 w-1/2" rowSpan={5}>Name</th>
                        <th className="border border-gray-400 p-2 w-1/2" rowSpan={5}>Email</th>
                        <th className="border border-gray-400 p-2">Assign</th>
                        <th className="border border-gray-400 p-2">Resolve</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td className="border border-gray-400 p-2">Balu patil @nnf</td>
                        <td className="border border-gray-400 p-2">Balupatil@nnf</td>
                        <td className="border border-gray-400 p-2">2</td>
                        <td className="border border-gray-400 p-2">1</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">Akhilesh patil @nnf</td>
                        <td className="border border-gray-400 p-2">Akhileshpatil@nnf</td>
                        <td className="border border-gray-400 p-2">2</td>
                        <td className="border border-gray-400 p-2">1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdminTechSupport;
