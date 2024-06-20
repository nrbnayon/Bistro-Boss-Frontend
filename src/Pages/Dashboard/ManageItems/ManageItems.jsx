import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle";
import { useState } from "react";
import { AiOutlineEye, AiOutlineCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const header = {
    title: "---Hurry Up---",
    desc: "Manage all Items",
  };

  const [menus, loading, refetch, error] = useMenu();
  const [activeMenu, setActiveMenu] = useState(null);
  const axiosSecure = useAxios();

  const handleMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleDeleteItem = (itemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/menu/${itemId}`);

          if (res.status === 200) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the item.",
              icon: "error",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the item.",
            icon: "error",
          });
        }
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <SectionTitle header={header} />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            {menus.map((menu, index) => (
              <tr key={menu._id || index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={menu.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{menu.name}</td>
                <td>{menu.price}</td>
                <td className="text-right">
                  <button
                    className="btn btn-sm btn-primary mr-2"
                    onClick={() => handleMenuToggle(index)}
                  >
                    {activeMenu === index ? (
                      <AiOutlineCloseCircle className="text-white" />
                    ) : (
                      <AiOutlineEye className="text-white" />
                    )}
                  </button>
                  {activeMenu === index && (
                    <div className="dropdown dropdown-end">
                      <ul className="dropdown-menu shadow menu-end-component">
                        <li>
                          <Link
                            to={`/dashboard/update-item/${menu._id}`}
                            // onClick={() => handleEditItem(menu._id)}
                            className="btn btn-sm bg-orange-500"
                          >
                            <FaEdit />
                            <span className="hidden md:visible">Edit</span>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => handleDeleteItem(menu._id)}
                            className="btn btn-warning btn-sm text-red-500"
                          >
                            <FaTrashAlt />{" "}
                            <span className="hidden md:visible">Delete</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
