import React, { Component } from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';

import moment from 'moment';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import '../common/react-datepicker-override.css'
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import OpenInNewIcon from 'material-ui/svg-icons/action/open-in-new';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import Pagination from '../Pagination'

import { defaultState as getSearchByCriteriaResultsDefaultState } from '../../../reducers/searchByCriteriaResults';

import {
    enthnicityOptionsList,
    genderOptionsList,
    housingStatusOptionsList,
    primaryDrugOptionsList,
    hepCStatusOptionsList,
} from '../../../utils/fieldValueLists';

import {
    RANGE_CURRENT_WEEK,
    RANGE_PREVIOUS_WEEK,
    RANGE_CURRENT_YEAR,
    RANGE_PREVIOUS_YEAR,
    RANGE_ALL_TIME,
} from '../../../constants';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import Select from 'react-select';
import { fade } from 'material-ui/utils/colorManipulator';

const NO_VAL_PROVIDED = '-';

function dateTranslation ({val}) {
    return val instanceof Date ? moment(val).format('l') : NO_VAL_PROVIDED;
}

const nullOption = { value: null, label: '---' };

const columns = [
    {
        key: 'rowNum',
        label: '#',
        style: {width: '2em'},
        show: true,
    },
    {
        key: 'pageSize',
        label: 'Page Size',
        show: false,
        filterOptions: [
            { value: 10, label: 10 },
            { value: 20, label: 20 },
            { value: 30, label: 30 },
        ],
    },
    // primary
    {
        key: 'uid',
        label: 'UID',
        style: { width: '12em', marginRight: 0, paddingRight: 0 },
        // filterOptions: [],
        show: true,
    },
    {
        key: 'mothersFirstThree',
        label: `Mother's First Three`,
        style: { width: '10em', marginRight: 0, paddingRight: 0 },
        filterByText: {
            minLength: 3,
            maxLength: 3,
        },
        show: true,
    },
    {
        key: 'dateOfLastVisit',
        label: 'Date of Last Visit',
        filterOptions: [
            nullOption,
            { value: RANGE_CURRENT_WEEK, label: 'Current Week' },
            { value: RANGE_PREVIOUS_WEEK, label: 'Previous Week' },
            { value: RANGE_CURRENT_YEAR, label: 'Current Year' },
            { value: RANGE_PREVIOUS_YEAR, label: 'Previous Year' },
            { value: RANGE_ALL_TIME, label: 'All Time' },
        ],
        displayTranslation: dateTranslation,
        show: true,
    },
    // constants
    {
        key: 'dateOfBirth',
        label: 'Date of Birth',
        filterByCalendar: true,
        displayTranslation: dateTranslation,
        show: true,
    },
    {
        key: 'hispanic',
        label: 'Hispanic',
        filterOptions: [
            nullOption,
            { value: true, label: 'Hispanic' },
            { value: false, label: 'Not hispanic' },
        ],
        show: false,
    },
    {
        key: 'countryOfBirth',
        label: 'Country of Birth',
        filterOptions: [
            nullOption,
            { value: 'US', label: 'US' },
            { value: 'PR', label: 'PR' },
            { value: 'Other', label: 'other' },
        ],
        show: true,
    },
    {
        key: 'ethnicity',
        label: 'Ethnicity',
        filterOptions: [
            nullOption,
            ...enthnicityOptionsList,
        ],
        show: true,
    },
    {
        key: 'genderIdentity',
        label: 'Gender Identity',
        filterOptions: [
            nullOption,
            ...genderOptionsList,
        ],
        show: true,
    },
    // insurance and housing
    // {
    //     key: 'hasHealthInsurance',
    //     label: 'Has Health Insurance',
    //     filterOptions: [
    //         nullOption,
    //         { value: true, label: 'Has' },
    //         { value: false, label: 'Does not have' },
    //     ],
    //     show: false,
    // },
    {
        key: 'housingStatus',
        label: 'Housing Status',
        filterOptions: [
            nullOption,
            ...housingStatusOptionsList,
        ],
        show: false,
    },
    // drug info
    {
        key: 'primaryDrug',
        label: 'Primary Drug',
        filterOptions: [
            nullOption,
            ...primaryDrugOptionsList,
        ],
        show: false,
    },
    // {
    //     key: 'didOdLastYear',
    //     label: 'Did Od Last Year',
    //     filterOptions: [
    //         nullOption,
    //         { value: true, label: 'Did OD' },
    //         { value: false, label: 'Did not OD' },
    //     ],
    //     show: false,
    // },
    {
        key: 'hivStatus',
        label: 'Hiv Status',
        filterOptions: [
            nullOption,
            { value: 'positive', label: 'Positive' },
            { value: 'negative', label: 'Negative' },
            { value: 'not-tested', label: 'Not tested' },
        ],
        show: false,
    },
    // {
    //     key: 'isInCareForHiv',
    //     label: 'Is In Care For Hiv',
    //     filterOptions: [
    //         nullOption,
    //         { value: true, label: 'In care' },
    //         { value: false, label: 'Not in care' },
    //     ],
    //     show: false,
    // },
    {
        key: 'hepCStatus',
        label: 'Hep C Status',
        filterOptions: [
            nullOption,
            ...hepCStatusOptionsList,
        ],
        show: false,
    },
    // {
    //     key: 'isInCareForHepC',
    //     label: 'Is In Care For Hep C',
    //     filterOptions: [],
    //     show: false,
    // },
    // {
    //     key: 'ageOfFirstInjection',
    //     label: 'Age of First Injection',
    //     filterOptions: [],
    //     show: false,
    // },
];

class Search extends Component {

    constructor(props) {
        super(props);

        this.updateState = this.updateState.bind(this);

        this.state = columns.reduce( (agg, col) => {
            agg[col.key] = {
                show: col.show,
            };
            return agg;
        }, {
            showSettings: false,
            isFirstTime: true,
        });

        this.searchByCriteriaResultsDefaultState = getSearchByCriteriaResultsDefaultState();
        this.requestSearchByCriteriaIndexStart = this.requestSearchByCriteriaIndexStart.bind(this);
        this.requestSearchByCriteriaPageSize = this.requestSearchByCriteriaPageSize.bind(this);
    }

    requestUpdateSearchByCriteria({key, value}) {
        if (this.state.isFirstTime) {
            this.setState({ isFirstTime: false });
        }
        const { requestSearchByCriteria,  searchByCriteriaResults: { searchCriteria } } = this.props;
        searchCriteria[key] = value;
        requestSearchByCriteria({searchCriteria});
    }

    updateState({ key, val }) {
        if ( val === false ) {
            this.requestUpdateSearchByCriteria({
                key, 
                value: this.searchByCriteriaResultsDefaultState.searchCriteria[key]
            });
        }
        this.setState({
            [key]: { show: val }
        });
    }

    requestSearchByCriteriaIndexStart({ indexStart }) {
        this.requestUpdateSearchByCriteria({ key: 'indexStart', value: indexStart });
    }
    requestSearchByCriteriaPageSize({ pageSize }) {
        this.requestUpdateSearchByCriteria({ key: 'pageSize', value: pageSize });
    }

    render() {

        const {
            requestSearchByCriteria,
            searchByCriteriaResults: { searchResults, searchCriteria },
            muiTheme: {palette},
        } = this.props;

        const {
            pageSize,
            indexStart = 0,
        } = searchCriteria;

        const {
            totalCount = 0,
            contacts = [],
        } = searchResults || {};

        if ( searchCriteria.isFirstRequest ) {
            requestSearchByCriteria({ searchCriteria: {
                ...searchCriteria,
                isFirstRequest: false,
            }});
        }

        const colsShownCount = Object.keys(this.state).filter( stateKey => {
            return this.state[stateKey].show;
        }).length;

        const minWidth = colsShownCount*10;

        console.log('search indexStart', indexStart);

        return (
            <section
                style={{
                    position: 'absolute',
                    width: '100%',
                    paddingTop: '155px',
                    marginTop: '-155px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100% - 155px)',
                    overflow: 'hidden',
                    minHeight: '0px', /* IMPORTANT: you need this for non-chrome browsers */
                }}>
                <aside 
                    style={{
                        padding: '1em 1em 0',
                        overflow: 'auto',
                        textAlign: 'right'
                    }}
                    >
                    <FlatButton
                        label="configure columns"
                        labelPosition="after"
                        icon={<SettingsIcon />}
                        onClick={() => this.setState({ showSettings: !this.state.showSettings })}
                        />
                    {this.state.showSettings && <div
                        style={{
                            display: 'flex', 
                            // // flex: 1,
                            // backgroundColor: '#f00',
                            flexWrap: 'wrap', 
                            justifyContent: 'space-between',
                            paddingTop: '.5em',
                        }}>
                        { columns
                            .filter( col => {
                                return col.key !== 'rowNum' && col.key !== 'uid';
                            })
                            .map( col => {
                                return <div key={col.key}><Toggle
                                    labelStyle={{ 
                                        minWidth: '10em', 
                                        textAlign: 'left',
                                    }} 
                                    // style={{ display: 'inline-block' }}
                                    key={col.key}
                                    label={col.label}
                                    labelPosition="right"
                                    toggled={this.state[col.key].show}
                                    onToggle={(event, val) => {
                                        this.updateState({ key: col.key, val });
                                    }}
                                /></div>
                        }) }
                    </div>}
                </aside>
                <div style={{
                    display: 'flex',
                    flex: 3,
                    margin: '.8em',
                    border: '.2em solid ' + palette.borderColor,
                    minHeight: '0', /* IMPORTANT: you need this for non-chrome browsers */
                }}>
                    {contacts && (
                        <Table
                            selectable={false}
                            fixedHeader={true}
                            fixedFooter={true}
                            wrapperStyle={{
                                flex: 1,
                                position: 'relative',
                                overflow: 'auto',
                                height: '100%',
                            }}
                            style={{ 
                                minWidth: `${minWidth}em`,
                            }}
                            bodyStyle={{
                                minWidth: `${minWidth}em`,
                                marginBottom: '-49px',
                                paddingBottom: '49px',
                                height: 'calc(100% - 163px)',
                                paddingTop: '114px',
                                paddingBottom: '49px',
                            }}
                            headerStyle={{
                                position: 'absolute',
                                top: 0,
                            }}
                            footerStyle={{
                                position: 'absolute',
                                bottom: 0,
                                borderTop: '1px solid ' + palette.primary3Color, 
                                opacity: 0.84,
                            }}
                            >
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                                style={{ backgroundColor: fade(palette.borderColor, 0.3) }}
                                >
                                <TableRow>
                                    {columns
                                        .filter( column => {
                                            return this.state[column.key].show === true;
                                        })
                                        .map( column => {
                                            return (
                                                <TableHeaderColumn
                                                    style={{
                                                        ...column.style,
                                                        whiteSpace: 'normal'
                                                    }}
                                                    key={column.key}
                                                    >
                                                    {column.label}
                                                </TableHeaderColumn>
                                            );
                                        })
                                    }
                                </TableRow>
                                <TableRow>
                                    {columns
                                        .filter( column => {
                                            return this.state[column.key].show === true;
                                        })
                                        .map( column => {
                                            return (
                                                <TableHeaderColumn
                                                    style={{
                                                        ...column.style,
                                                        whiteSpace: 'normal'
                                                    }}
                                                    key={column.key}
                                                    >
                                                    {column.filterByText !== undefined && (
                                                        <TextField
                                                            hintText='abc'
                                                            fullWidth={true}
                                                            inputStyle={{ background: palette.canvasColor }}
                                                            defaultValue={searchCriteria[column.key]}
                                                            errorText={searchCriteria[column.key] && 
                                                                ( searchCriteria[column.key].length > column.filterByText.maxLength || 
                                                                    searchCriteria[column.key].length < column.filterByText.minLength ) ?
                                                                'Enter three letters' : false }
                                                            onChange={(e, value) => this.requestUpdateSearchByCriteria({key: column.key, value})}
                                                            />
                                                    )}
                                                    {column.filterByCalendar === true && (
                                                        <DatePicker
                                                            selected={searchCriteria[column.key] ? moment(searchCriteria[column.key]) : null}
                                                            onChange={(date) => this.requestUpdateSearchByCriteria({key: column.key, value: date})}
                                                            peekNextMonth
                                                            showMonthDropdown
                                                            showYearDropdown
                                                            dropdownMode="select"
                                                        />
                                                    )}
                                                    {column.filterOptions && column.filterOptions.length && (
                                                        <Select
                                                            key={'dropdown-' + column.key}
                                                            defaultValue={searchCriteria[column.key]}
                                                            onChange={(e) => this.requestUpdateSearchByCriteria({key: column.key, value: e.value})}
                                                            options={column.filterOptions}
                                                        />
                                                    )}
                                                </TableHeaderColumn>
                                            );
                                        })
                                    }
                                </TableRow>
                            </TableHeader>

                            <TableBody
                                showRowHover={true}
                                displayRowCheckbox={false}
                                style={{ backgroundColor: fade(palette.borderColor, 0.05) }}
                                >
                                {contacts.map( (contact, contactIndex) => (
                                    <TableRow
                                        striped={true}
                                        key={contact.uid}
                                        >
                                        {columns
                                            .filter( column => {
                                                return this.state[column.key].show === true;
                                            })
                                            .map( (column) => {
                                                let value = contact[column.key] === undefined ? NO_VAL_PROVIDED : contact[column.key];
                                                if (value === true || value === false) {
                                                    value = value.toString();
                                                } else if (column.key === 'rowNum') {
                                                    value = indexStart + contactIndex + 1;
                                                } else if ('function' === typeof column.displayTranslation) {
                                                    value = column.displayTranslation({ val: value });
                                                }
                                                return (
                                                    <TableRowColumn
                                                        style={column.style || {}}
                                                        key={contact.uid + '-' +column.key}
                                                        >
                                                        {column.key === 'uid' ? (
                                                            <FlatButton
                                                                key={column.key + value}
                                                                style={{ width:'100%', position: 'static' }}
                                                                label={value}
                                                                labelPosition='before'
                                                                labelStyle={{ 
                                                                    fontFamily: 'monospace', 
                                                                    position: 'static',
                                                                    textTransform: 'uppercase',
                                                                }}
                                                                icon={<OpenInNewIcon 
                                                                    style={{
                                                                        width: 12,
                                                                        height: 12,
                                                                    }}
                                                                    />}
                                                                onClick={() => {
                                                                    // TODO: refactor this.props out of here
                                                                    this.props.getContact(value);
                                                                    this.props.setCurrentSearchQuery(value || '');
                                                                    this.props.history.push(`/contact/${value}/info`)
                                                                }}
                                                                />
                                                        ) : (
                                                            <span>{value}</span>
                                                        )}
                                                    </TableRowColumn>
                                                );
                                            })
                                        }
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter
                                // Create space for pagination
                                adjustForCheckbox={false}
                                style={{ backgroundColor: fade(palette.borderColor, 0.3) }}>
                                <TableRow>
                                    <TableRowColumn
                                        colSpan={colsShownCount}
                                        style={{textAlign: 'left', verticalAlign: 'middle'}}
                                        >
                                    </TableRowColumn>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    )}
                </div>
                <Pagination
                    requestSearchByCriteriaIndexStart={this.requestSearchByCriteriaIndexStart}
                    requestSearchByCriteriaPageSize={this.requestSearchByCriteriaPageSize}
                    pageSizeOptions={columns.find(col => col.key === 'pageSize').filterOptions}
                    contacts={contacts}
                    totalCount={totalCount}
                    indexStart={indexStart}
                    pageSize={pageSize}
                    />
            </section>
        );
    }
}

export default muiThemeable()(Search);