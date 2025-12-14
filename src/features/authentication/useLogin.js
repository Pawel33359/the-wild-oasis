import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const { mutate: loginUser, isLoading } = useMutation({
        mutationFn: login,
        onSuccess: (user)=>{
            // toast.success("User succesfully logged in");
            // QueryClient.invalidateQueries({queryKey: ["login"]});
            // console.log(user);
            queryClient.setQueryData(["user"], user.user);
            navigate("/", {replace: true});
        },
        onError: (err)=>{
            toast.error(err.message)
        }
    });

  return {isLoading, loginUser}
}
