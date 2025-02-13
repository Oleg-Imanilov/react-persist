import PropTypes from 'prop-types';

function MenuItem({name, icon, onClick, active = false}) {
  return (
    <div className={`flex rounded-lg justify-between items-center m-4 p-4 cursor-pointer hover:bg-blue-300 ${active ? 'bg-blue-300 text-white' : 'bg-blue-200 text-gray-400'}`} onClick={onClick}>
      {icon}&nbsp;
      {name}
    </div>
  )
} 

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};


export default MenuItem
