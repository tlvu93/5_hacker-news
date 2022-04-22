import Header from '../components/Header/Header';
import PropTypes from 'prop-types';

const AppLayout = (props) => {
  return (
    <div className="bg-slate-300">
      <Header createNewQuery={props.createNewQuery} />
      <div className="pt-12 p-6 min-h-screen">{props.children}</div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
  createNewQuery: PropTypes.func,
};

export default AppLayout;
