import { useSelector } from "react-redux";

const ActivityDropdown = ({ isOpen, onClose }) => {
  const activities = useSelector((state) => state.activities.activities);

  if (!isOpen) return null;

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white rounded-md shadow-lg py-1 z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-4 py-2 border-b border-gray-200">
        <h3 className="text-sm font-semibold">Recent Activities</h3>
      </div>
      <div className="max-h-96 text-left overflow-y-auto">
        {activities.length === 0 ? (
          <div className="px-4 py-2 text-sm text-gray-500">
            No recent activities
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="px-4 py-2 hover:bg-gray-100">
              <div className="text-sm">{activity.message}</div>
              <div className="text-xs text-gray-500">
                {formatTimestamp(activity.timestamp)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityDropdown;
