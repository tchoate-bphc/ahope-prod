import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logoutUserRequest, setCurrentSearchQuery, getContact } from 'actions';
import NavigationView from 'components/view/Navigation';

const mapStateToProps = (state) => {

    return {
        user: state.user,
        config: state.config,
        contactUid: state.contact.uid,
        notificationSingleton: state.notificationSingleton,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch( logoutUserRequest() ),
        setCurrentSearchQuery: searchQuery => dispatch( setCurrentSearchQuery(searchQuery) ),
        getContact: contactUid => dispatch( getContact(contactUid) ),
    }
};

const NavigationController = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavigationView));

export default NavigationController;
