import React, { Component } from 'react';

import ContactInfo from 'components/controller/ContactInfo';
import ContactIntake from 'components/controller/ContactIntake';
import ContactNavigation from 'components/controller/ContactNavigation';
import ContactSearchResults from 'components/controller/ContactSearchResults';

class Contact extends Component {

    render() {

        const { match, contact } = this.props;

        const urlPathUid = match && match.params && match.params.uid && match.params.uid.toLowerCase();
        const urlPathAction = match && match.params && match.params.action && match.params.action.toLowerCase();

        let regex = null;
        if (!urlPathUid || urlPathUid.length < 1 ) {

        } else if (urlPathUid.length > 0 && urlPathUid.length <= 4) {
            regex = new RegExp(/\w{1,4}/);
        } else if (urlPathUid.length > 4 && urlPathUid.length <= 10) {
            regex = new RegExp(/\w{4}\d{1,6}/);
        } else if (urlPathUid.length > 10) {
            regex = new RegExp(/\w{4}\d{6}\w{1,3}/);
        }

        const isPartialSearchQuery = urlPathUid && ( urlPathUid.length < 13 || urlPathUid.length > 13 );
        const isValidSearchQuery = urlPathUid && urlPathUid.length === 13 && regex.test(urlPathUid);

        return (
            <div>
                {(urlPathUid === undefined || !urlPathAction) && (
                    <ContactSearchResults />
                )}
                {urlPathUid !== undefined && !isValidSearchQuery ? (
                    <div style={{
                        display: 'block',
                        padding: '1em',
                    }}>
                        <h2>Invalid Contact ID</h2>
                        <p>Please enter a valid contact ID in the header to continue</p>
                    </div>
                ) : (
                    <div>
                        {!isPartialSearchQuery && isValidSearchQuery && urlPathAction === 'intake' && (
                            <div>
                                <ContactNavigation/>
                                <ContactIntake
                                    uid={urlPathUid}
                                    contact={contact}
                                />
                            </div>
                        )}
                        {!isPartialSearchQuery && isValidSearchQuery && urlPathAction === 'info' && (
                            <div>
                                <ContactNavigation/>
                                <ContactInfo
                                    uid={urlPathUid}
                                    contact={contact}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Contact;
