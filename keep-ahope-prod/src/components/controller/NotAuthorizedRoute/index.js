import { connect } from 'react-redux';
import NotAuthorizedRoute from 'components/view/NotAuthorizedRoute';
import { logoutUserRequest } from 'actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch( logoutUserRequest() ),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotAuthorizedRoute);;
