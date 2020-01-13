
import Moment from 'moment';
import { extendMoment } from 'moment-range';

import {
    RANGE_ALL_TIME,
    RANGE_CURRENT_WEEK,
    RANGE_PREVIOUS_WEEK,
    RANGE_CURRENT_YEAR,
    RANGE_PREVIOUS_YEAR,
} from '../constants';

// memoize moment assignment
const getExtendedMoment = (() => {

    let cachedMoment = null;
    
    return getCachedMoment;

    function getCachedMoment() {
        return cachedMoment || ( cachedMoment = extendMoment(Moment) );
    }
})();

export function getDateBoundsFromRangeKey({ rangeKey }) {

    const moment = getExtendedMoment();
    const now = new Date();
    let min, max;

    // note isoWeek starts on Monday

    switch ( rangeKey ) {
        case RANGE_ALL_TIME:
            min = moment('2017');
            max = moment(now).add(1, 'day');
            break;

        case RANGE_PREVIOUS_WEEK:
            min = moment().startOf('isoWeek').subtract(1, 'week');
            max = moment().startOf('isoWeek').subtract(1, 'day');
            break;

        case RANGE_CURRENT_YEAR:
            min = moment().startOf('year');
            max = moment(now).add(1, 'day');
            break;

        case RANGE_PREVIOUS_YEAR:
            min = moment().startOf('year').subtract(1, 'year');
            max = moment().startOf('year').subtract(1, 'day');
            break;

        case RANGE_CURRENT_WEEK:
        default:
            min = moment().startOf('isoWeek');
            max = moment(now).add(1, 'day');
            break;
    }

    return {
        min: min.toDate(),
        max: max.toDate(),
    };
}
