const NavItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3 py-1.5 hover:text-gray-900 text-sm rounded-lg cursor-pointer">
    <img src={icon} className="h-5 w-5" alt={`${text} icon`} />
    <span>{text}</span>
  </div>
);

export default NavItem;
