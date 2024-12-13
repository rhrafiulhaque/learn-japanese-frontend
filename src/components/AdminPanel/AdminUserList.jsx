import React from "react";
import { toast } from "react-toastify";
import Loading from "../common/Loading";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "../features/auth/authApi";

const AdminUserList = () => {
  const {
    data: users,
    isLoading: usersLoading,
    isError: usersIsError,
    error: usersError,
  } = useGetAllUsersQuery();

  const [
    updateUserRole,
    {
      isLoading: isUpdateUserLoading,
      isError: isUpdateUserError,
      error: updateUserError,
    },
  ] = useUpdateUserRoleMutation();

  const handleRoleChange = async (userId, newRole) => {
    const confirmChange = window.confirm(
      "Are you sure to change this user's role?"
    );
    if (confirmChange) {
      await updateUserRole({ userId, data: { role: newRole } })
        .unwrap()
        .then(() => {
          toast.success("The User role changed successfully!");
        })
        .catch(() => {
          toast.error("Failed to change the user's role.");
        });
    }
  };

  let content = null;
  if (usersLoading || isUpdateUserLoading) {
    content = <Loading />;
  }
  if (!usersLoading && usersIsError) {
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-end gap-10 lg:h-full">
        <div className="lg:col-span-2 flex items-center justify-center bg-white p-6 rounded-md shadow-md">
          <p className="text-red-500">{usersError?.data?.message}</p>;
        </div>
      </div>
    );
  }
  if (!usersLoading && !usersIsError && users?.data.length === 0) {
    content = <div className="text-red-500">There are no users!</div>;
  }
  if (!usersLoading && !usersIsError && users?.data.length > 0) {
    content = (
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-white">
              SL. No
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Name
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Email
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Role
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
          {users.data.map((user, index) => (
            <tr key={user._id} className="even:bg-blue-50">
              <td className="p-4 text-sm text-black">{index + 1}</td>
              <td className="p-4 text-sm text-black">{user.name}</td>
              <td className="p-4 text-sm text-black">{user.email}</td>
              <td className="p-4 text-sm text-black">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  className="p-2 border rounded-md bg-gray-100"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <main className="">
      <h1 className="py-2 text-2xl font-semibold text-center">User List</h1>
      <div className="font-[sans-serif] overflow-x-auto">{content}</div>
    </main>
  );
};

export default AdminUserList;
