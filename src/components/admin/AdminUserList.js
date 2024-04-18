import { Link } from "react-router-dom";

const AdminUserList = () => {
    return (
        <div className="flex justify-center m-4">
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-400 p-2">id</th>
                        <th className="border border-gray-400 p-2 w-1/2" rowSpan={5}>Name</th>
                        <th className="border border-gray-400 p-2 w-1/2" rowSpan={5}>Email</th>
                        
                    </tr>
                </thead>
                <tbody className="text-center">
                <div>
                
                </div>
                
                    <tr>
                    
                        <td className="border border-gray-400 p-2 underline"><Link to="/admin/user/123">100000000000000</Link></td>
                        <td className="border border-gray-400 p-2">Balu Patil</td>
                        <td className="border border-gray-400 p-2">Balupatil@nnf</td>
                        
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">2</td>
                        <td className="border border-gray-400 p-2">Akhilesh Patil</td>
                        <td className="border border-gray-400 p-2">Akhileshpatil@nnf</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default AdminUserList;