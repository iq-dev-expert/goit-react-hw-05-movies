import { Loading } from 'notiflix/build/notiflix-loading-aio';
import PropTypes from 'prop-types';

function Loader({ isLoading }) {
  isLoading ? Loading.dots() : Loading.remove();
}

Loader.propTypes = { isLoading: PropTypes.bool.isRequired };

export default Loader;
