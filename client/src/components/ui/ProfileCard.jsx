import PropTypes from 'prop-types';
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const ProfileCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
        <div>
            <p className="text-gray-600 text-sm">{title}</p>
            <p className="text-1xl font-bold mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
    </div>
);
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
ProfileCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired
};

export default ProfileCard;