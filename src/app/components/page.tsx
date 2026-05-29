import axios from "axios";
import { User } from "@/types/type";
import Link from "next/link";

export const dynamic = "force-dynamic";
const FetchUser = async (): Promise<User[]> => {
  try {
    const res = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
};

export default async function Post() {
    const userData = await FetchUser();
    const fetchedAt = new Date().toLocaleTimeString();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <h1 className="text-2xl font-bold mb-4">User Information at {fetchedAt}</h1>
          <Link href="/" className="text-blue-500 hover:underline mb-4">Go back to Home</Link>
          <ul className="text-lg mb-4">
            {
            userData?.map((items) => (
              <li key={items?.id} className="mb-2 p-4 border rounded-lg shadow-sm w-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h2 className="text-xl font-semibold">{items?.title}</h2>
                <p className="text-gray-600">{items?.body}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">Data fetched at: {fetchedAt}</p>
        </main>
      </div>
    );  
          }



