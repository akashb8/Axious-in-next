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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300">
      {/* Hero Section */}
      <header className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md shadow-sm border border-white/10">
            <span className="flex w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            Data fetched at {fetchedAt}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-md">
            User Directory
          </h1>
          <p className="text-lg sm:text-xl text-indigo-50 max-w-2xl font-light mb-8 drop-shadow-sm">
            Manage and view your team members in a sleek, modern interface powered by Next.js and Tailwind CSS.
          </p>
          <Link
            href="/components"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-indigo-600 shadow-xl transition-all duration-300 hover:bg-indigo-50 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Explore Posts
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
            Active Users
          </h2>
          <div className="text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1 rounded-full shadow-sm border border-slate-200 dark:border-slate-800">
            {userData?.length || 0} users found
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {userData?.map((user) => (
            <div
              key={user?.id}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-lg font-bold text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 shadow-sm">
                  {user?.name?.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 line-clamp-1">
                    {user?.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                    @{user?.username || user?.name?.split(' ')?.[0]?.toLowerCase()}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <a 
                  href={`mailto:${user?.email}`} 
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="truncate">{user?.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}