import React, {Component} from 'react';

import AutoComplete from 'material-ui/AutoComplete';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import Paper from 'material-ui/Paper';

import muiThemeable from 'material-ui/styles/muiThemeable';

class ContactTypeaheadSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.validate.bind(this);
    }

    handleUpdateInput(value) {
        this.validate(value);

        this.props.typeaheadSearch(value);

        // navigate to contact search results page if we're not already there
        if (this.props.location.pathname !== '/contact') {
            this.props.history.push('/contact');
        }
    };

    handleCancelClick() {
        if (this.props.contactSearchQuery.length > 0) {
            this.handleUpdateInput('')
        }
    }

    validate(value) {
        let regex;
        let errorMsg = '';
        // can this be done with a single RegEx??
        if (value.length > 0 && value.length <= 4) {
            regex = new RegExp('(\\w{1,4})');
        } else if (value.length > 4 && value.length <= 10) {
            regex = new RegExp('\\w{4}\\d{1,6}');
        } else if (value.length > 10) {
            regex = new RegExp('\\w{4}\\d{6}\\w{1,3}');
        }

        if (value.length > 0 && !regex.test(value)) {
            errorMsg = 'Contact ID must be of the form: AA BB 01 01 2018 AAA';
        }

        this.setState({errorMessage: errorMsg});
    }

    render() {
        const {
            dataSource,
            contactSearchQuery,
            muiTheme: {palette},
        } = this.props;

        return (
            <Paper
                style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    width: 'auto',
                    padding: '0.5rem',
                    position: 'relative', // cancel and char count are absolutely positioned
                }}
                zDepth={1}
            >
                <AutoComplete
                    inputStyle          = {{ textTransform: 'uppercase' }}
                    dataSource          = {dataSource}
                    floatingLabelText   = "Search for a Contact ID"
                    fullWidth           = {true}
                    hintText            = "AA BB 01 01 2018 AAA"
                    errorText           = { this.state.errorMessage }
                    menuStyle           = {{ display: 'none' }}
                    onUpdateInput       = { this.handleUpdateInput.bind(this) }
                    searchText          = { contactSearchQuery }
                />
                <CancelIcon
                    color = {palette.accent3Color}
                    style = {{
                        position: 'absolute',
                        top: '2.5rem',
                        right: '0.4rem',
                        cursor: 'pointer',
                        zIndex: 1101, // appBar is 1100
                    }}
                    onClick={this.handleCancelClick.bind(this)}
                />
                <div style={{
                    position: 'absolute',
                    right: '0.5rem',
                    bottom: '-1rem',
                    fontSize: '0.6rem',
                }}>
                    {contactSearchQuery && contactSearchQuery.length} / 15
                </div>
            </Paper>
        );
    }
}

export default muiThemeable()(ContactTypeaheadSearch);
