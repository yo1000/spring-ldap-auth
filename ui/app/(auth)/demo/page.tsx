'use client'

import {useEffect, useState} from "react";
import {useAuth} from "@/contexts/AuthContext";
import Link from "next/link";

const API_BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URI;

const page = () => {
  const { auth } = useAuth();
  const [demo, setDemo] = useState<object|undefined>();

  useEffect(() => {
    (async () => {
      const resp = await fetch(`${API_BASE_URI}/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth?.token}`,
        },
      });

      if (!resp.ok) {
        setDemo({"message": "auth error"});
        return;
      }

      const json = await resp.json();
      setDemo(json);
    })();
  }, [auth?.token]);

  return (
    <>
      <div className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
        <div className="px-4 py-5 sm:p-6">
          <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            <code>
              <pre>{JSON.stringify(demo)}</pre>
            </code>
          </div>
          <div className="mt-5">
            <div className="mt-2">
              <div className="mt-3 text-sm/6">
                <Link
                  href={"/signin"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <span aria-hidden="true"> &larr;</span>
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
