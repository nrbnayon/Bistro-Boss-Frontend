import { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `/api?key=${image_hosting_key}`;

const UpdateItem = () => {
  const [isUploading, setIsUploading] = useState(false);
  const axiosSecure = useAxios();
  const { id } = useParams();
  const header = {
    title: "---Update as New---",
    desc: "Update An Item",
  };
  const {
    data: menu,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["menu", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/specific-menu/${id}`);
      return res.data;
    },
  });
  console.log("Menu", menu);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: menu?.name,
      category: menu?.category,
      price: menu?.price,
      recipe: menu?.recipe,
      image: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsUploading(true);
      let imageUrl = menu.image; // Use existing image if not updated

      if (data.image[0]) {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const res = await axios.post(image_hosting_api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.data.success) {
          imageUrl = res.data.data.display_url;
        }
      }

      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseInt(data.price),
        recipe: data.recipe,
        image: imageUrl,
      };
      const menuRes = await axiosSecure.patch(`/update-menu/${id}`, menuItem);
      if (menuRes.data.success) {
        toast.success("Item updated successfully");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating item");
    } finally {
      setIsUploading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu item</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full">
        <SectionTitle header={header} />
      </div>
      <div className="w-full p-4 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control">
            <label className="block">
              <span className="font-medium text-gray-700">Recipe Name*</span>
              <input
                type="text"
                {...register("name", { required: "Recipe name is required" })}
                defaultValue={menu.name}
                className={`input input-bordered w-full mt-1 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="block">
                <span className="font-medium text-gray-700">
                  Food Category*
                </span>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  defaultValue={menu.category}
                  className={`select w-full mt-1 ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option disabled value="">
                    Select a Food Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="drinks">Drinks</option>
                  <option value="dessert">Dessert</option>
                </select>
                {errors.category && (
                  <span className="text-red-500 text-sm">
                    {errors.category.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="block">
                <span className="font-medium text-gray-700">Price*</span>
                <input
                  type="number"
                  min={1}
                  {...register("price", {
                    required: "Price is required",
                    min: 1,
                  })}
                  defaultValue={menu.price}
                  className={`input input-bordered w-full mt-1 ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.price && (
                  <span className="text-red-500 text-sm">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="form-control">
            <label className="block">
              <span className="font-medium text-gray-700">
                Recipe Description
              </span>
              <textarea
                className="textarea textarea-bordered w-full mt-1 border-gray-300"
                placeholder="Recipe Description"
                {...register("recipe")}
                defaultValue={menu.recipe}
              ></textarea>
            </label>
          </div>

          <div className="form-control">
            <label className="block">
              <span className="font-medium text-gray-700">Image*</span>
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                className={`file-input w-full mt-1 ${
                  errors.image ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.image && (
                <span className="text-red-500 text-sm">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control">
            <button
              type="submit"
              className={`btn btn-primary w-full mt-4 ${
                isUploading
                  ? "bg-gray-400 hover:bg-gray-500"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2`}
              disabled={isUploading}
            >
              {isUploading ? (
                "Uploading..."
              ) : (
                <>
                  Update Item <FaUtensils />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
