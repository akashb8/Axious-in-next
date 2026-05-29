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
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300">
        
        {/* Navigation Header */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex items-center justify-between">
            <Link 
              href="/" 
              className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Directory
            </Link>
            
            <div className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              Updated at {fetchedAt}
            </div>
          </div>
        </nav>

        {/* Main Feed */}
        <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
          
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Community Posts
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Discover the latest updates, stories, and thoughts shared by our vibrant community.
            </p>
          </header>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {userData?.map((item) => (
              <article 
                key={item?.id} 
                className="break-inside-avoid bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item?.title?.charAt(0).toUpperCase() + item?.title?.slice(1)}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                  {item?.body}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">User {item?.userId || item?.id}</span>
                  </div>
                  <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>
          
        </main>
      </div>
    );  
}
