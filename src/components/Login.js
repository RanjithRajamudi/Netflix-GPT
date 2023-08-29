import { useState } from "react";
import Header from "./Header";

const Login = () => {


    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 box-border text-white rounded-lg border-0 bg-opacity-75 ">
                <h1 className="font-bold text-3xl mb-7">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900" />}
                <input type="text" placeholder="Email or phone number" className="p-4 my-4 w-full bg-gray-900" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900" />
                <button className="p-4 my-6 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-6 cursor-pointer" onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}</p>
            </form>
        </div>
    )
}
export default Login;