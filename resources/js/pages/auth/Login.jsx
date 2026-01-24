import Lottie from "lottie-react";
import AuthLayout from "@/layouts/AuthLayout";
import LoginGif from "@/animations/login";
import { Link, useForm } from "@inertiajs/react";

const Login = () => {
  const { data, setData, post, errors } = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('login.store'));
  };

  return (
    <AuthLayout title="Login">
      <div className="flex flex-col h-screen justify-center text-black">
        <h1 className="text-primary font-semibold flex justify-center text-4xl">ishopee</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center items-center w-full lg:w-1/2 px-4 py-4 lg:px-28">
            <Lottie animationData={LoginGif} />
          </div>
          <div className="flex justify-center items-center w-full lg:w-1/2 px-4 py-4 lg:px-28">
            <div className="w-full">
              <div className="flex flex-col justify-center items-center mb-4">
                <h2 className="text-3xl font-bold">LOGIN</h2>
                <h2 className="text-xs font-light">Don't have an account? <Link href={route('register')} className="hover:underline text-primary">Register</Link></h2>
              </div>
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset pb-2">
                  <legend className="fieldset-legend py-0 font-light">email</legend>
                  <input type="email" id="email" name="email" value={data.email} onChange={(e) => setData("email", e.target.value)} className="input w-full border-x-0 border-t-0 border-b rounded-none px-0 focus-within:outline-none focus-within:border-b-black" required />
                  {errors.email && <p className="label text-red-600">{errors.email}</p>}
                </fieldset>
                <fieldset className="fieldset pb-2">
                  <legend className="fieldset-legend py-0 font-light">password</legend>
                  <input type="password" id="password" name="password" value={data.password} onChange={(e) => setData("password", e.target.value)} className="input w-full border-x-0 border-t-0 border-b rounded-none px-0 focus-within:outline-none focus-within:border-b-black" minLength={8} required />
                  {errors.password && <p className="label text-red-600">{errors.password}</p>}
                </fieldset>
                <button className="btn text-white bg-primary hover:brightness-95 w-full mt-4">SUBMIT</button>
              </form>
              <Link href={route('product')} className="flex items-center hover:underline text-gray-600 text-sm mt-2 w-1/4"><span className="me-1">&lt;</span>Homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login;