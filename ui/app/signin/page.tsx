'use client'

import {useAuth} from "@/contexts/AuthContext";
import {useState} from "react";
import Link from "next/link";

const SigninPage = () => {
  const { auth, signIn, signOut } = useAuth();
  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  return (
    <>
      {auth?.username
        ? <>
          <div className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{auth?.username}</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
                <code>
                  <pre className={"container mx-auto break-all whitespace-normal"}>{auth?.token}</pre>
                </code>
                <div className="mt-2">
                  <div className="mt-3 text-sm/6">
                    <Link
                      href={"/demo"}
                      className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Demo
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button
                  onClick={async () => {
                    await signOut();
                  }}
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </>
        : <>
          {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-white dark:bg-gray-900">
            <body class="h-full">
            ```
          */}
          <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-sm space-y-10">
              <div>
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="mx-auto h-10 w-auto dark:hidden"
                />
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="mx-auto h-10 w-auto not-dark:hidden"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                  Sign in to your LDAP user
                </h2>
              </div>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <div className="col-span-2">
                    <input
                      value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}
                      id="username"
                      name="username"
                      type="text"
                      required
                      placeholder="Username"
                      aria-label="Username"
                      className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                  <div className="-mt-px">
                    <input
                      value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Password"
                      autoComplete="current-password"
                      aria-label="Password"
                      className="block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={async () => {
                      await signIn(inputUsername, inputPassword);
                    }}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default SigninPage;
