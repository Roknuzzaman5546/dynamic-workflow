import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUserRole = () => {
    const axiosPublic = useAxiosPublic()
    const { data: userRole = [], refetch } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/userRole`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [userRole, refetch]
};

export default useUserRole;