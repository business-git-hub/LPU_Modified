import { Search, Filter } from "lucide-react";
import PropTypes from 'prop-types';
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function BlogFilter({ search, handleSearch }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
      {/* Search Input */}
          {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>
    </div>
  );
}
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 

BlogFilter.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  category: PropTypes.string,
  handleCategoryFilter: PropTypes.func,
  blogs: PropTypes.array,
  categories: PropTypes.array
};
