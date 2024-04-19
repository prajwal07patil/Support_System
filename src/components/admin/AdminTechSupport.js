const AdminTechSupport = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assign</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resolve</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Balu patil @nnf</td>
                        <td className="px-6 py-4 whitespace-nowrap">Balupatil@nnf</td>
                        <td className="px-6 py-4 whitespace-nowrap">2</td>
                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Akhilesh patil @nnf</td>
                        <td className="px-6 py-4 whitespace-nowrap">Akhileshpatil@nnf</td>
                        <td className="px-6 py-4 whitespace-nowrap">2</td>
                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdminTechSupport;
