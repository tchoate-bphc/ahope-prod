import { connect } from 'react-redux';
import Notifications from 'components/view/Notifications';

const mapStateToProps = (state) => {
    return {
        notificationSingleton: state.notificationSingleton
    };
};

const NotificationsController = connect(
    mapStateToProps,
)(Notifications);

export default NotificationsController;