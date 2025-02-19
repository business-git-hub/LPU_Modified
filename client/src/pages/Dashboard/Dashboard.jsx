import { BarChart3, GraduationCap, BookOpen, MessageSquare } from 'lucide-react';
import PropTypes from 'prop-types';
import { useDashboardData } from '../../hooks/Dashboard/useDashboardData';
import { useSelector } from "react-redux";
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired
};
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
const Dashboard = () => {
  const { allUniversities, allBlogs, blogs, allContacts } = useDashboardData();
  const { monthlyViews } = useSelector((state) => state.views);
  const totalUniversities = allUniversities?.length || 0;
  const totalBlogs = allBlogs?.length || 0;
  const totalContacts = allContacts?.length || 0;
  const monthlyView = monthlyViews || 0;

  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
  return (
    <div className="space-y-6 p-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Universities"
          value={totalUniversities.toString()}
          icon={GraduationCap}
          color="bg-[#4056B6]"
        />
        <StatCard
          title="Total Blogs"
          value={totalBlogs.toString()}
          icon={BookOpen}
          color="bg-emerald-500"
        />
        <StatCard
          title="Monthly Views"
          value={monthlyView.toString()}
          icon={BarChart3}
          color="bg-amber-500"
        />
        <StatCard
          title="Contact Requests"
          value={totalContacts.toString()}
          icon={MessageSquare}
          color="bg-rose-500"
        />
      </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
      {/* Recent Updates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Universities */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Universities</h2>
          <div className="space-y-4">
            {allUniversities?.slice(0, 3).map((uni, index) => (
              <div
                key={uni._id || index}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-800">{uni.name}</p>
                  <p className="text-sm text-gray-600">
                    {uni.location?.city}, {uni.location?.state}
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(uni.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        {/* Recent Blog Posts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Blog Posts</h2>
          <div className="space-y-4">
            {blogs?.posts?.slice(0, 3).map((post, index) => (
              <div
                key={post._id || index}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-800">{post.title}</p>
                  {/* <p className="text-sm text-gray-600">{post.views || 0} views</p> */}
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default Dashboard;
