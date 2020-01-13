import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ContactIntake from 'components/view/ContactIntake';

import {updateIntakeFormField, updateIntakeFormWithContact, createEvent} from 'actions';

const mapStateToProps = (state) => {
    return {
        intakeForm: state.intakeForm,
        consentText: state.consent.text,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateIntakeFormField: ({key, val}) => dispatch(updateIntakeFormField({key, val})),
        updateIntakeFormWithContact: ({contact}) => dispatch(updateIntakeFormWithContact({contact})),
        createEvent: ({eventData, history}) => dispatch(createEvent({eventData, history})),
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactIntake));