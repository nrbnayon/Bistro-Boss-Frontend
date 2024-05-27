import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const {
    data: cart = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return { cart, isLoading, refetch, error };
};

export default useCart;
