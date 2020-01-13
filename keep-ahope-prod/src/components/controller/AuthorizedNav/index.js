import { connect } from 'react-redux';
import AuthorizedNav from 'components/view/AuthorizedNav';

const mapStateToProps = (state) => {
    return {
        userPermissions: state.user.permissions,
    }
};

export default connect(
    mapStateToProps
)(AuthorizedNav);;