import React, { Component } from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';
import BlockIcon from 'material-ui/svg-icons/content/block';


export class ContactInfoEventDetailsSection extends Component {

    // constructor(props) {
    //     super(props);
    // }

    getAttrVal ( { val, key, palette } ) {

        const iconStyle = { padding:0, margin:0, width:16, height:16 };

        if ( Object.prototype.toString.call(val) === '[object Date]' ) {
            // date
            if (key === 'createdAt' || key === 'updatedAt') {
                val = new Date(val).toLocaleDateString() + ' (' + new Date(val).toLocaleTimeString() + ')';
            } else {
                val = new Date(val).toLocaleDateString();
            }
        } if ( Array.isArray(val) ) {
            // array
            val = val.join(', ');
        } else {
            val = val.toString();
        }

        switch (key) {
            case 'syringesGiven':
                return <span>{val}</span>;
            case 'syringesTaken':
                return <span>{val}</span>;
            default:
        }

        switch (val) {
            case 'positive':
                return <span style={{ color: palette.warningColor }}>{val}</span>
            case 'negative':
                return <span style={{ color: palette.successColor }}>{val}</span>
            case true:
            case 'true':
                return (<span style={{ color: palette.successColor }}>
                    <CheckCircleIcon style={ iconStyle } />
                </span>)
            case false:
            case 'false':
                return (<span style={{ color: palette.successColor }}>
                    <BlockIcon style={ iconStyle } />
                </span>)
            default:
                return val;
        }
    }

    render() {

        const { eventDetailsSectionData, className, palette } = this.props;

        const styles = {
            container: {
                float: 'left',
                paddingBottom: '3.25em',
            },
            cell: {
                padding: '.8em .5em 0 .5em',
                height: '2em',
                overflow: 'hidden',
                whiteSpace: 'normal',
                textOverflow: 'ellipsis',
                overflowWrap: 'break-word',
            },
            row: {
                borderBottom: 'none',
                height: '2em',
            },
            headerRow: {
                height: '1.45em',
            },
            headerColumn: {
                height: '1.45em',
                padding: '.4em .5em .4em .5em',
                color: palette.accent1Color,
                fontWeight: 'bold',
                textAlign: 'center',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
            }
        }

        return !eventDetailsSectionData || !eventDetailsSectionData.data || !eventDetailsSectionData.data.length ? null : (
            <div 
                className={className}
                style={ styles.container }
                >
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow
                            style={ styles.headerRow }
                            >
                            <TableHeaderColumn 
                                colSpan={2} 
                                style={ styles.headerColumn }
                                >
                                {eventDetailsSectionData.label}
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        >
                        { eventDetailsSectionData.data.map( attrObj => {
                            return (
                                <TableRow 
                                    key={ attrObj.key }
                                    style={ styles.row }
                                    >
                                    <TableRowColumn
                                        style={{ 
                                            ...styles.cell, 
                                            textAlign: 'right',
                                            color: palette.accent3Color
                                        }}
                                    >
                                        {attrObj.label}
                                    </TableRowColumn>
                                    <TableRowColumn
                                        style={ styles.cell }
                                        >
                                        { this.getAttrVal( { val: attrObj.value, key: attrObj.key, palette } ) }
                                    </TableRowColumn>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}