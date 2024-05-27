import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Spinner from "../../Shared/Spinner/Spinner";
import { MdOutlinePayments } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, isLoading, error, refetch } = useCart();
  const axiosSecure = useAxios();
  const cartItem = cart.length;
  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading cart: {error.message}</div>;

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/carts/${id}`);

        if (res.data.deletedCount > 0) {
          await refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          toast.warn("Item was not deleted.");
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There was an issue deleting the item.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="w-full p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h3 className="font-bold text-lg text-gray-800">{cartItem} Items</h3>
          <h3 className="font-bold text-lg text-gray-800">
            Total Price: ${totalCartPrice.toFixed(2)}
          </h3>
        </div>
        <button className="flex items-center btn bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-lg shadow-md mt-4 md:mt-0">
          <MdOutlinePayments className="" /> Pay
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">SI</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {cart.map((item, i) => (
              <tr
                key={item._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <p>{i + 1}</p>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm text-gray-500">
                        {item.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left font-semibold">
                  ${item.price.toFixed(2)}
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default Cart;
