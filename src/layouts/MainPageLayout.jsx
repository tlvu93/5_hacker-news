import Header from '../components/Header/Header';
import PropTypes from 'prop-types';

const MainPageLayout = (props) => {
  return (
    <div className="bg-slate-200">
      <Header />
      <div className="mt-12 p-6 min-h-screen">{props.children}</div>
    </div>
  );
};

MainPageLayout.propTypes = {
  children: PropTypes.node
};

export default MainPageLayout;
