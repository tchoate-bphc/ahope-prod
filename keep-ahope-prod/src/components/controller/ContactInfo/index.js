import { connect } from 'react-redux';
import ContactInfo from 'components/view/ContactInfo';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        events: state.events,
        contact: state.contact,
    };
};

const ContactInfoController = connect(
    mapStateToProps,
)(ContactInfo);

export default ContactInfoController;
