import React from 'react';

import { Chart } from 'react-google-charts';

import { Card, CardHeader, CardText, CardMedia } from 'material-ui/Card';

import { Textfit } from 'react-textfit';

class Results extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    
    convertDataToGoogleFormat({data, xLabel, yLabel}) {

        return [
            [ xLabel, yLabel ],
            ...data.map(series => {
                return [series.label, parseInt(series.count, 10)];
            })
        ];
    }

    abbreviateNumber({val: num, fixed = 0 }) {
        if (num === null) { return null; } // terminate early
        if (num === 0) { return '0'; } // terminate early
        fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
        var b = (num).toPrecision(2).split("e"), // get power
            k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
            c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(0 + fixed), // divide by power
            d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
            e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
        return e;
    }

    formatNumberValue({val}) {
        const formattedVal = this.abbreviateNumber({val});
        let fontWeight = 400;
        switch (formattedVal.substr(-1).toLowerCase()) {
            case 'k':
                fontWeight = 400;
                break;
            case 'm':
                fontWeight = 600;
                break;
            case 'b':
                fontWeight = 800;
                break;
            case 't':
                fontWeight = 1200;
                break;
            default:
                fontWeight = 200;
        }
        return (
            <Textfit 
                mode="single"
                style={{
                    fontWeight, 
                }}
                >
                {formattedVal}
            </Textfit>
        );
    }

    render() {

        const {
            data,
            hSize,
            label,
            path,
            type,
            // vSize,
        } = this.props;

        const reportsCardCols = [
            'col-xs-6 col-sm-3 col-md-2 col-lg-2',
            'col-xs-12 col-sm-6 col-md-4 col-lg-3',
            'col-xs-12 col-sm-9 col-md-6 col-lg-4',
        ];

        const value = path.split('.').reduce((o, i) => {
            return !!o && o[i] !== undefined ? o[i] : null;
        }, data);

        return (
            <div
                className={reportsCardCols[hSize - 1]}
                style={{ marginBottom: '1rem' }}
            >
                <Card
                    className='box'
                    style={{ background: '#f4f4f4', boxShadow: 'none', height: '150px' }}
                >
                    <CardHeader
                        title={label}
                        style={{
                            paddingBottom: '4px',
                            width: '100%',
                        }}
                        textStyle={{
                            paddingRight: 0,
                            width: '100%',
                        }}
                        titleStyle={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '100%',
                        }}
                        subtitle={value < 999 || Array.isArray(value) ? false : value.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                    />
                    {type === 'simple' && (
                        <CardText
                            style={{
                                fontSize:  value || value === 0 ? '5em' : '1em',
                                fontWeight: '800',
                                padding: '4px',
                                width: '100%',
                                height: '100%',
                                display: 'flex', 
                                justifyContent: 'center',
                            }}
                        >
                            <span
                                style={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    padding: '0 .1em',
                                }}
                                >
                                {value || value === 0 ? this.formatNumberValue({val: value}) : 'Loading...'}
                            </span>
                        </CardText>
                    )}
                    {type === 'breakdown' && (
                        value && value.length ? (
                            <CardMedia
                                style={{ background: '#f4f4f4' }}
                            >
                                <Chart
                                    chartType="BarChart"
                                    data={this.convertDataToGoogleFormat({
                                        data: value, 
                                        xLabel: 'Count',
                                        yLabel: label,
                                    })}
                                    options={{
                                        legend: {position: 'none'},
                                        backgroundColor: {
                                            fill: '#F4F4F4',
                                            opacity: 100
                                        },
                                        colors: ['#888', '#aaa'],
                                    }}
                                    graph_id={'BarChart'+label.replace(' ','')}
                                    width="100%"
                                    height="110px"
                                    legend_toggle
                                    />
                            </CardMedia>
                        ) : (
                            <CardText
                                style={{
                                    fontSize: value && value.length === 0 ? '5em' : '1em',
                                    fontWeight: '800',
                                    padding: '4px',
                                    display: 'flex', justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                                <span
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                    >
                                    {!value ? 'Loading...' : 0 }
                                </span>
                            </CardText>
                        )
                    )}
                </Card>
            </div>
        );
    }
}

export default Results;
