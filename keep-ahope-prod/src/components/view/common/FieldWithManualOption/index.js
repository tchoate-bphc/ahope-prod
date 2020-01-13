import React, { Component } from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';

import TextField from 'material-ui/TextField';
import NavigationSubdirectoryArrowRightIcon from 'material-ui/svg-icons/navigation/subdirectory-arrow-right'

export class FieldWithManualOption extends Component {

    render() {

        const { showManual, defaultFieldEl, defaultFieldProps, onManualChange } = this.props;

        return (
            <div>
                {defaultFieldEl}
                {showManual && (
                    <div>
                        <NavigationSubdirectoryArrowRightIcon color='#8DC3DB' />
                        <TextField
                            style={{ paddingTop: 0, paddingLeft: '1rem' }}
                            key={defaultFieldProps.title.replace(' ','') + "Manual"}
                            id={defaultFieldProps.title.replace(' ','') + "Manual"}
                            floatingLabelText={defaultFieldProps.title + ": Other"}
                            value={(!defaultFieldProps.val || 'string' === typeof defaultFieldProps.val) ? defaultFieldProps.val : defaultFieldProps.val.filter( anyVal => { // here, show anything not in valid list
                                return defaultFieldProps.validOptionsList.findIndex( validOption => validOption === anyVal ) < 0;
                            })}
                            onChange={(e, value) => onManualChange({manualVal: value, defaultFieldVal: defaultFieldProps.val})}
                        />
                    </div>
                )}
            </div>
        );
    }
}
