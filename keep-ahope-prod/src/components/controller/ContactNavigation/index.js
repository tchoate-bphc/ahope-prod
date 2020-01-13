import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logoutUserRequest } from 'actions';
import ContactNavigationView from 'components/view/ContactNavigation';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        config: state.config,
        contact: state.contact,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUserRequest()),
    }
};

const NavigationController = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactNavigationView));

export default NavigationController;
