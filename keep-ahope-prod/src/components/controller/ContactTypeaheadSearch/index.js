import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { searchContacts, setCurrentSearchQuery } from 'actions';
import ContactTypeaheadSearch from 'components/view/ContactTypeaheadSearch';

const mapStateToProps = (state) => {
    return {
        dataSource: state.contacts.searchResults,
        contactSearchQuery: state.contacts.searchQuery,
    };
};

const mapDispatchToProps = {
    typeaheadSearch: searchContacts,
    setCurrentSearchQuery,
};

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactTypeaheadSearch));
