
import { useToast as shadcnToast, } from "./use-toast.js";


//CUSTOME HOOK TO SHOW TOAST
const toastVariants = {
    default: "bg-gray-800 text-white",
    success: "bg-green-600 text-white",
    info: "bg-blue-600 text-white",
    warning: "bg-yellow-500 text-white",
    error: "bg-red-600 text-white",
  };

const useToast=()=>{

    const {toast}=shadcnToast()

    const showToast=(variant="default",title,desc)=>{
       return toast({
            className:toastVariants[variant],
            title: title,
            description:desc
        })
    }

    return {showToast}
}

export default useToast