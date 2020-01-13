import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ReportsCard from './ReportsCard';

import { fetchReportsData } from 'actions';

import {
    RANGE_CURRENT_WEEK,
    RANGE_PREVIOUS_WEEK,
    RANGE_CURRENT_YEAR,
    RANGE_PREVIOUS_YEAR,
    RANGE_ALL_TIME,
} from '../../../constants'; // why does this not work with `'constants'`?

class Results extends React.Component {

    constructor(props) {
        super(props);

        const { dispatch } = props;
        
        this.dateRangeChange = this.dateRangeChange.bind(this);

        this.state = {
            dateRange: RANGE_CURRENT_WEEK,
            fetchingInProgress: ''
        };

        // TODO: just change the route
        dispatch(fetchReportsData({ dateRange: this.state.dateRange }));
    }
    
    dateRangeChange = (event, index, dateRange) => {

        const { dispatch } = this.props;

        this.setState({
            dateRange
        });

        // TODO: just change the route
        dispatch(fetchReportsData({ dateRange }));
    }

    render () {

        const { reportsData } = this.props;

        // function getRandomInt(max) {
        //     return Math.floor(Math.random() * Math.floor(max));
        // }

        // const getRandomVal = () => getRandomInt( Math.pow(10, getRandomInt(8)) ) * Math.pow(10, getRandomInt(8));

        // const reportsData = {
        //     contacts: {
        //         _meta: {
        //             count: getRandomVal(),
        //             unfilteredCount: getRandomVal(),
        //         },
        //         countryOfBirth: [],
        //         ethnicity: [],
        //         hispanic: [],
        //         ageOfFirstInjection: [],
        //         genderIdentity: []
        //     },
        //     events: {
        //         _meta: {
        //             count: getRandomVal(),
        //             unfilteredCount: getRandomVal(),
        //         },
        //         narcanWasOffered: getRandomVal(),
        //         narcanWasTaken: getRandomVal(),
        //         syringesGiven: getRandomVal(),
        //         syringesTaken: getRandomVal(),
        //     }
        // };

        // For chart KPIs
        // const breakdownKpis = [
        //     'birthCountry',
        //     'ethnicity',
        //     'ageOfFirstInjection',
        //     'genderIdentity',
        //     'hispanic'
        // ]

        return (
            <div className="page">
                <div className="text-content">
                
                    <div style={{display:'flex', alignItems:'center'}}>
                        Metrics from: 
                        &nbsp;
                        <SelectField value={this.state.dateRange} onChange={this.dateRangeChange}>
                            <MenuItem value={RANGE_CURRENT_WEEK} label="Current Week" primaryText="Current Week" />
                            <MenuItem value={RANGE_PREVIOUS_WEEK} label="Previous Week" primaryText="Previous Week" />
                            <MenuItem value={RANGE_CURRENT_YEAR} label="Current Year" primaryText="Current Year" />
                            <MenuItem value={RANGE_PREVIOUS_YEAR} label="Previous Year" primaryText="Previous Year" />
                            <MenuItem value={RANGE_ALL_TIME} label="All Time" primaryText="All Time" />
                        </SelectField>
                    </div>

                    <section className="row" style={{marginTop:'2em'}}>

                        <ReportsCard
                            type='simple'
                            hSize={2}
                            label='Total Contacts Served (All Time)'
                            path='contacts._meta.unfilteredCount'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='simple'
                            hSize={2}
                            label='Total Events Served (All Time)'
                            path='events._meta.unfilteredCount'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='simple'
                            hSize={1}
                            label='Contact Events'
                            path='events._meta.count'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='simple'
                            hSize={1}
                            label='Contacts Served'
                            path='contacts._meta.count'
                            data={reportsData}
                            />
                            
                        <ReportsCard
                            type='simple'
                            hSize={1}
                            label='Syringes Given'
                            path='events.syringesGiven'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='simple'
                            hSize={1}
                            label='Syringes Collected'
                            path='events.syringesTaken'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='simple'
                            hSize={1}
                            label='Narcan Offered'
                            path='events.narcanWasOffered'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='simple'
                            hSize={1}
                            label='Narcan Taken'
                            path='events.narcanWasTaken'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='breakdown'
                            hSize={2}
                            label='Country of Birth'
                            path='contacts.countryOfBirth'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='breakdown'
                            hSize={2}
                            label='Gender Identity'
                            path='contacts.genderIdentity'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='breakdown'
                            hSize={2}
                            label='Ethnicity'
                            path='contacts.ethnicity'
                            data={reportsData}
                            />

                        <ReportsCard
                            type='breakdown'
                            hSize={2}
                            label='Is Hispanic'
                            path='contacts.hispanic'
                            data={reportsData}
                            />

                    </section>

                </div>
            </div>
        );
    }
}

export default Results;
