import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error");
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
    }, []);

    return (
        <div className="absolute w-full z-10 bg-gradient-to-b from-black flex justify-between">
            <img className="w-52  fill-red-600 ml-2%" src={NETFLIX_LOGO} alt="Logo" />
            {user && <div className="flex p-2">
                <img className="w-12 h-12" src={user?.photoURL} alt="userIcon" />
                <div className="flex-col mx-2 text-white">
                    <p >{user.displayName}</p>
                    <button onClick={handleSignOut} className="font-bold">(Sign Out)</button>
                </div>
            </div>}
        </div>

    );
}

export default Header;