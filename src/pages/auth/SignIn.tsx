import React from 'react';
import { HiOutlineKey, HiOutlineMail } from 'react-icons/hi';
import { Formik, Form } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  return (
    <>
      <div className="flex items-center h-screen justify-center">
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit, errors, setFieldValue }) => {
            return (
              <Form
                onSubmit={handleSubmit}
                className="min-h-screen flex flex-col items-center justify-center "
              >
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                  <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
                    Login To Your Account
                  </div>
                  {/* <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                    <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                      <i className="fab fa-facebook-f"></i>
                    </span>
                    <span>Login with Facebook</span>
                  </button> */}
                  <div className="relative mt-10 h-px bg-gray-300">
                    <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                      <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                        Login With Email
                      </span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <div>
                      <div className="flex flex-col mb-6">
                        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                          Email
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <HiOutlineMail className="h-5 w-5" />
                          </div>

                          <input
                            id="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            name="email"
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mb-6">
                        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                          Password:
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <span>
                              <HiOutlineKey className="h-5 w-5" />
                            </span>
                          </div>

                          <input
                            id="password"
                            onChange={handleChange}
                            type="password"
                            value={values.password}
                            name="password"
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="flex items-center mb-6 -mt-4">
                        <div className="flex ml-auto">
                          <a
                            href="#"
                            className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                          >
                            Forgot Your Password?
                          </a>
                        </div>
                      </div>

                      <div className="flex w-full">
                        <button
                          type="submit"
                          className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-darkBlue hover:bg-darkBlue rounded py-2 w-full transition duration-150 ease-in"
                        >
                          <span className="mr-2 uppercase">Login</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-6">
                    <a
                      href="#"
                      target="_blank"
                      className="inline-flex items-center font-bold text-[#00ABFE] hover:text-[#00ABFE] text-xs text-center"
                    >
                      <span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </span>
                      <span className="ml-2">
                        You don&apos;t have an account?
                      </span>
                    </a>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default SignIn;
