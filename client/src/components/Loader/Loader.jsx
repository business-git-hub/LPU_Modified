import { HashLoader } from 'react-spinners';
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="relative">
                <HashLoader color="#3B82F6" size={60} />
                <p className="text-blue-600 font-semibold mt-4 text-center">Loading...</p>
            </div>
        </div>
    );
};
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default Loader;