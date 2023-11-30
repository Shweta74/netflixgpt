import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSignInForm, setIsSignInForm] =useState(true);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
    return(
        <div className=" bg-black relative">
           <Header/>
            <div className="opacity-50 bg-black">
                <img className="min-w-full h-100" src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
            </div>
            <form className="opacity-80 rounded-md absolute top-1/2 left-1/2 text-white my-36 w-2/12 p-12 transform translate-x-[-50%] translate-y-[-50%] bg-black">
                <h1 className="font-bold text-3xl py-4 ">{isSignInForm? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full rounded-md" />  }
                <input type="text" placeholder="EmailAddress" className="p-4 my-4 bg-gray-700 w-full rounded-md" />
                <input type="password" placeholder="password" className="p-4 my-4 bg-gray-700 w-full rounded-md" />
                <button  className="p-4 my-6  bg-red-700 w-full rounded-md" >{isSignInForm? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix ? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
           
        </div>
    )
}
export default Login;
