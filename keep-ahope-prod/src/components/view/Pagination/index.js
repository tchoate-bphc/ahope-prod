import React from 'react';

import FlatButton from 'material-ui/FlatButton';

import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

import Select from 'react-select';

export default (props) => {
    const {
        contacts,
        indexStart,
        pageSize,
        pageSizeOptions,
        requestSearchByCriteriaIndexStart,
        requestSearchByCriteriaPageSize,
        totalCount,
    } = props;

    const style = {
        text: {
            fontWeight: 800,
        }
    };

    const indexEnd = indexStart + contacts.length;

    const requestPreviousPage = () => {
        const requestedIndex = indexStart - pageSize;
        const updatedIndexStart = requestedIndex >= 0 ? requestedIndex : 0;
        requestSearchByCriteriaIndexStart({ indexStart: updatedIndexStart })
    };
    const requestNextPage = () => {
        const requestedIndex = indexStart + pageSize;
        const updatedIndexStart = requestedIndex < totalCount ? requestedIndex : totalCount;
        requestSearchByCriteriaIndexStart({ indexStart: updatedIndexStart })
    };
    const requestPageSizeChange = (e) => {
        requestSearchByCriteriaPageSize({ pageSize: e.value });
    };

    return (
        <div
            style={{
                position: 'absolute',
                bottom: '1.5em',
                left: '1em',
                right: '1em',
                display: 'flex',
                flexFlow: 'row',
                justifyContent: 'space-between',
            }}
            >
            <div style={{ display: 'flex' }} >
                <div style={{ display: 'inline-block'}}>
                    <FlatButton
                        style={{
                            marginLeft: '1em',
                            marginRight: '1em',
                            minWidth: '2em',
                            // visibility change is delayed by Material UI
                            visibility: indexStart === 0 ? 'hidden' : 'visible',
                            // opacity change is tweened
                            opacity: indexStart === 0 ? 0 : 1,
                        }}
                        onClick={requestPreviousPage}
                        icon={<ArrowBackIcon />}
                        />
                    {contacts && totalCount > 0 && (
                        <span>
                            Showing 
                            <span style={style.text}> {indexStart + 1} </span> - <span style={style.text}> {indexEnd} </span>
                            of <span style={style.text}>{totalCount}</span>
                        </span>
                    )}
                    {totalCount === 0 && 'No Results'}
                    <FlatButton
                        style={{
                            marginLeft: '1em',
                            marginRight: '1em',
                            minWidth: '2em',
                            // visibility change is delayed by Material UI
                            visibility: indexEnd === totalCount ? 'hidden' : 'visible',
                            // opacity change is tweened
                            opacity: indexEnd === totalCount ? 0 : 1,
                        }}
                        onClick={requestNextPage}
                        icon={<ArrowForwardIcon />}
                        />
                </div>
            </div>
            <div style={{ display: 'flex' }} >
                <div style={{ display: 'inline-block', marginLeft: '1em', marginRight: '1em' }}>
                    Records Per Page: 
                    <div style={{ display: 'inline-block', width: '6em', paddingLeft: '1em' }}>
                        <Select
                            value={pageSizeOptions.filter(option => option.value === pageSize )}
                            key={'pageSizeOptions'}
                            menuPlacement='top'
                            onChange={requestPageSizeChange}
                            options={pageSizeOptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};