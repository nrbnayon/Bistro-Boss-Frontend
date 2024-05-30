import { FaTrashAlt } from "react-icons/fa";
import useAxios from "./../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaUsersGear } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDeleteUser = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete User!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/users/${id}`);

        if (res.data.deletedCount > 0) {
          await refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your user has been deleted.",
            icon: "success",
          });
        } else {
          toast.warn("User was not deleted.");
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There was an issue deleting the user.",
          icon: "error",
        });
      }
    }
  };
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log("Admin", res.data);
      if (res.data.modifiedCount > 0) {
        refetch();

        Swal.fire({
          position: "top-end",
          title: `${user.name} is an Admin Now Successful!`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="w-full p-6 bg-gray-100 min-h-screen font-cinzel">
      <div className="flex flex-col md:flex-row justify-center items-center bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h3 className="font-bold text-lg text-gray-800">
            Total Users: {users.length}
          </h3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">SI</th>
              <th className="py-3 px-6 text-left">User Info</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user, i) => (
              <tr
                key={user._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <p>{i + 1}</p>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.profileImg} alt={user.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm text-gray-500">{user?.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left font-semibold">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-md bg-base-300 bg-opacity-60 text-primary "
                    >
                      <FaUsersGear className="w-6 h-6" />
                    </button>
                  )}
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-ghost btn-sm text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
