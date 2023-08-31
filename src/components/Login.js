import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BANNER, USER_AVATAR } from "../utils/constants";

const Login = () => {


    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        const testMessage = checkValidData(email.current.value, password.current.value);
        setErrorMessage(testMessage);

        if (testMessage) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        })
                        .catch((error) => {
                            setErrorMessage(error)
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }


    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="max-h-full max-w-10 !important" src={NETFLIX_BANNER} alt="Logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 box-border text-white rounded-lg border-0 bg-opacity-75 ">
                <h1 className="font-bold text-3xl mb-7">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900" />}
                <input ref={email} type="text" placeholder="Email or phone number" className="p-4 my-4 w-full bg-gray-900" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900" />
                <p className="text-red-500">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-6 cursor-pointer" onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}</p>
            </form>
        </div>
    )
}
export default Login;