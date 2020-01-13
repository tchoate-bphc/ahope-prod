import { connect } from 'react-redux';
import Contact from 'components/view/Contact';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        contact: state.contact,
    };
};

const ContactController = connect(
    mapStateToProps,
)(Contact);

export default ContactController;
