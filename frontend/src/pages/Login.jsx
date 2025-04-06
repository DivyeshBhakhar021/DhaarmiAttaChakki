// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./redux/AuthSlice";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     dispatch(login({ username, password }));

//     if (username === "dhaarmi" && password === "dHAARMI@60055") {
//       navigate("/admin");
//     }
//   };

//   return (
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           className="border p-2 rounded mb-3"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 rounded mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           onClick={handleLogin}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Login
//         </button>
//       </div>
//   );
// };

// export default Login;


import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      dispatch(login({ username, password }));

      if (username === "dhaarmi" && password === "dHAARMI@60055") {
        setTimeout(() => {
          setLoading(false);
          navigate("/admin");
        }, 800);
      } else {
        setLoading(false);
        setError("Invalid credentials");
      }
    } catch (err) {
      setLoading(false);
      setError("Authentication failed");
      console.error("Login error:", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Animated background elements using Tailwind's animation utilities */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-40 h-40 bg-blue-400 rounded-full opacity-10 -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-indigo-400 rounded-full opacity-10 bottom-10 right-10 animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-purple-400 rounded-full opacity-10 top-1/2 left-1/4 animate-pulse"></div>
      </div>

      {/* Login Card with Tailwind transitions */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-xl z-10 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        {/* Header with Tailwind gradient text */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Admin Portal
          </h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>

        {/* Error message with Tailwind transition */}
        {error && (
          <div className="p-3 text-sm text-red-800 bg-red-100 rounded-md border-l-4 border-red-500 transform transition-all duration-300 ease-in-out">
            {error}
          </div>
        )}

        <div className="mt-8 space-y-6">
          <div className="space-y-5">
            {/* Username input with Tailwind hover and focus effects */}
            <div className="relative group">
              <label className="absolute -top-6 left-2 text-xs font-medium text-gray-500 transition-all duration-300 group-hover:text-blue-500">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg placeholder-gray-400 
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         transition-all duration-300 hover:border-blue-300"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>

            {/* Password input with Tailwind hover and focus effects */}
            <div className="relative group">
              <label className="absolute -top-6 left-2 text-xs font-medium text-gray-500 transition-all duration-300 group-hover:text-blue-500">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg placeholder-gray-400 
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         transition-all duration-300 hover:border-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          </div>

          {/* Login button with Tailwind transitions and gradient */}
          <div>
            <button
              type="submit"
              onClick={handleLogin}
              disabled={loading}
              className={`w-full flex justify-center items-center py-3 px-4 rounded-lg text-sm font-medium text-white 
                        transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                        ${
                          loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                        }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <span className="relative group">
                  <span className="relative z-10">Sign in</span>
                  <span className="absolute inset-0 h-full w-0 bg-white opacity-20 group-hover:w-full transition-all duration-300 rounded"></span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Footer text with Tailwind opacity transition */}
      <p className="mt-6 text-xs text-center text-gray-500 opacity-80 transition-opacity duration-300 hover:opacity-100">
        Secure login portal • Admin access only
      </p>
    </div>
  );
};

export default Login;