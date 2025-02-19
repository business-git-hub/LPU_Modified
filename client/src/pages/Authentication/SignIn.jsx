import { LogIn } from 'lucide-react';
import useLogin from '../../hooks/Authentication/useLogin';

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 

const SignIn = () => {
  const {
    register,
    handleSubmit,
    errors,
    Errors,
    onSubmit,
    isLoading,
    serverError,
    successMessage
  } = useLogin();

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-[#4056B6] p-3 rounded-full">
              <LogIn className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Sign in to Admin Panel
          </h2>

          {/* Show error messages */}
          
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          {(Errors || serverError) && (
            <div className="mb-4 text-red-500 text-center">
              {Errors || serverError}
            </div>
          )}

          {/* Show success message */}
          
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          {successMessage && (
            <div className="mb-4 text-green-500 text-center">
              {successMessage}
            </div>
          )}

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="userEmail"
                type="email"
                {...register("userEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4056B6] focus:border-[#4056B6]"
              />
              {errors.userEmail && (
                <p className="mt-1 text-sm text-red-500">{errors.userEmail.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="userPassword"
                type="password"
                {...register("userPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters"
                  }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4056B6] focus:border-[#4056B6]"
              />
              {errors.userPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.userPassword.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  {...register("rememberMe", {
                    required: "Remember is required",
                  })}
                  className="h-4 w-4 text-[#4056B6] focus:ring-[#4056B6] border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              {errors.rememberMe && (
                <p className="mt-1 text-sm text-red-500">{errors.rememberMe.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4056B6] hover:bg-[#5067c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4056B6] disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default SignIn;
