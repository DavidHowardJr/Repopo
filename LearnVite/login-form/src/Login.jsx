
const Login = () => {
    return (
        <div>
            <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blut-lg bg-opacity-30 relative">
                <h1 className="text-4x1 font-bold text-center">Login</h1>
                <form action="">
                    <div className="relative my-4">
                        <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="relative my-4">
                        <input type="password" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                        <label htmlFor="">Your Password</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;