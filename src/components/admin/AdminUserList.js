import { Link } from "react-router-dom";

const AdminUserList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <Link
                to="/admin/user/123"
                className="text-indigo-600 hover:text-indigo-900"
              >
                100000000000000
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Balu Patil</td>
            <td className="px-6 py-4 whitespace-nowrap">Balupatil@nnf</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">2</td>
            <td className="px-6 py-4 whitespace-nowrap">Akhilesh Patil</td>
            <td className="px-6 py-4 whitespace-nowrap">
              Akhileshpatil@nnf
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserList;
