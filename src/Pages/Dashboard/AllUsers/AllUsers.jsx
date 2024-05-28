import { FaTrashAlt } from "react-icons/fa";

const AllUsers = () => {
  return (
    <div className="w-full p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h3 className="font-bold text-lg text-gray-800">
            Total Users {cartItem}
          </h3>
        </div>
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
                    // onClick={() => handleDelete(item._id)}
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
