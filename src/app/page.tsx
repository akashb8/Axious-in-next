import { User } from "@/types/type";
import axios from "axios";
import Link from "next/link";

export const dynamic = "force-dynamic";

const FetchUser = async (): Promise<User[]> => {
  try {
    let res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
};

export default async function Home() {
  const userData = await FetchUser();
  const fetchedAt = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <h1 className="text-2xl font-bold mb-4">
          User Information at {fetchedAt}
        </h1>

        <ul className="text-lg mb-4">
          {userData?.map((items) => (
            <li
              key={items?.id}
              className="mb-2 p-4 border rounded-lg shadow-sm w-full bg-gray-50 dark:bg-gray-800"
            >
              <h2 className="text-xl font-semibold">
                {items?.name}
              </h2>

              <p className="text-gray-600">
                {items?.email}
              </p>
            </li>
          ))}
        </ul>

        <Link
          href="/components"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          View Posts
        </Link>

      </main>
    </div>
  );
}