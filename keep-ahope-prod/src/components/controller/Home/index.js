import { connect } from 'react-redux';
import Home from 'components/view/Home';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        userPermissions: state.user.permissions,
    };
};

const HomeController = connect(
    mapStateToProps,
)(Home);

export default HomeController;