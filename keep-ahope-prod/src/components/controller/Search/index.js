import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Search from 'components/view/Search';

import { requestSearchByCriteria, getContact, setCurrentSearchQuery } from 'actions';

const mapStateToProps = (state) => {
    return {
        searchByCriteriaResults: state.searchByCriteriaResults,
    };
};

const mapDispatchToProps = {
    requestSearchByCriteria,
    getContact,
    setCurrentSearchQuery,
};

const SearchController = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search));

export default SearchController;