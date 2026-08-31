const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Sign Up</h1>

        <form>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium">Name</label>

            <input
              type="text"
              className="w-full rounded-md border px-4 py-2"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium">Email</label>

            <input
              type="email"
              className="w-full rounded-md border px-4 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">Password</label>

            <input
              type="password"
              className="w-full rounded-md border px-4 py-2"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
