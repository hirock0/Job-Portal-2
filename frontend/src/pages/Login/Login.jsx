import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase.config";
import { useSelector, useDispatch } from "react-redux";
const Login = () => {
  const selectordata = useSelector((state) => state?.Slice);
  console.log(selectordata);

  const onLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className=" min-h-screen ">
      <section>
        <div className="">
          <button
            onClick={onLogin}
            className=" mt-5 border bg-red-200
                     px-4"
          >
            Login
          </button>
        </div>
      </section>
    </main>
  );
};

export default Login;
