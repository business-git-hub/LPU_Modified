import { Search } from "lucide-react";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function SearchBar({ search, handleSearch }) {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search universities..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
            />
        </div>
    );
}
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 