import { connect } from 'react-redux';
import Results from 'components/view/Reports';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        // contacts: state.contacts,
        // events: state.events,
        reportsData: state.reportsData,
    };
};

const ResultsController = connect(
    mapStateToProps,
)(Results);

export default ResultsController;