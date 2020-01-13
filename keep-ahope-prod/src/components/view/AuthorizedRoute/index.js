import React, {Component} from 'react'
import { Route } from 'react-router-dom';

import NotAuthorizedRoute from 'components/controller/NotAuthorizedRoute';

class AuthorizedRoute extends Component {

    render() {

        const { location, userPermissions, component: Component, ...rest } = this.props;

        const notAuthProps = {
            from: location
        };

        return (
            <Route {...rest} render={props => (
                userPermissions.basic ? (
                        <Component {...props}/>
                    ) : (
                        <NotAuthorizedRoute {...notAuthProps} />
                    )
            )}/>
        );
    }
}

export default AuthorizedRoute;
