import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth"
import toast from "react-hot-toast";

export function useSignup(){
    const {mutate: signup, isLoading} = useMutation({
        mutationFn: signupApi,
        onSuccess: ()=>{
            toast.success("Account succesfully created! Please verify account from user's email address")
        },
        onError: (err)=>{
            console.log(err.message)
        }
    });

    return {signup, isLoading}
}