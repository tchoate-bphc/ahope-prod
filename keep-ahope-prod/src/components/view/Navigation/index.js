import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';

import Notifications from 'components/controller/Notifications';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import ArrowDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ContactTypeaheadSearch from 'components/controller/ContactTypeaheadSearch';
import EventNoteIcon from 'material-ui/svg-icons/notification/event-note';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import PersonOutlineIcon from 'material-ui/svg-icons/social/person-outline';
import PersonIcon from 'material-ui/svg-icons/social/person';

import preval from 'preval.macro'

import './styles.css';

function renderAppInfo () {
    return (
        <table style={{ lineHeight: '2em', marginBottom: '1.5em', fontFamily: 'monospace' }}>
            <tbody>
                <tr>
                    <td style={{paddingRight: '1em'}}>Version:</td>
                    <td>{process.env.REACT_APP_VERSION}</td>
                </tr>
                <tr>
                    <td>Updated:</td>
                    <td>
                        {(new Date(preval`module.exports = new Date();`)).toLocaleString('default', {timeZoneName: 'short'})}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.getMenuItemHandler = this.getMenuItemHandler.bind(this);
        this.setCurrentSearchQuery = props.setCurrentSearchQuery.bind(this);
        this.state = { drawerOpen: false };

        this.setCurrentSearchQuery(props.match.params.uid);
        props.getContact(props.match.params.uid); // TODO: make sure this isn't called too often
    }

    handleToggle () {
        // doesn't show navigation unless logged in.
        const { user } = this.props;
        if (user.uid && user.uid.length > 0) {
            this.setState({drawerOpen: !this.state.drawerOpen});
        }
    }

    getMenuItemHandler (routeName) {
        this.setState({drawerOpen: false});
        this.props.history.push(routeName);
    }

    handleLogout () {
        this.setState({drawerOpen: false});
        this.props.logout();
    }

    displayForAppBarTitle({match, location}) {
        const path = location.pathname;

        // TODO: see https://github.com/ReactTraining/react-router/issues/5870
        // so that we can use match instead of includes
        if (path.startsWith('/reports')) {
            return 'Reports';
        } else {
            return (<ContactTypeaheadSearch/>);
        }
    };

    displayContactSearchEditButton() {
        if(this.props.location.pathname.includes('/intake') || this.props.location.pathname.includes('info')){
            return true;
        }
        return false;
    }

    render () {
        const { user, muiTheme, match, location, notificationSingleton } = this.props;

        const avatarSize = 60,
            paddingSize = 15,
            drawerWidth = Math.min(450, window.outerWidth * .8);

        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleToggle}
                    title={this.displayForAppBarTitle({match, location})}
                    titleStyle={{
                        paddingTop: '0.5rem',
                        paddingBottom: '1rem',
                        height: 'auto' //override
                    }}
                />
                <Drawer
                    docked={false}
                    width={drawerWidth}
                    open={this.state.drawerOpen}
                    onRequestChange={() => this.setState({drawerOpen : false})}
                    >
                    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{backgroundColor: muiTheme.palette.primary1Color, padding: paddingSize }}>
                            <Avatar size={avatarSize} icon={<PersonOutlineIcon/>}/>
                            <MenuItem
                                style={{ color: muiTheme.palette.alternateTextColor, paddingTop: paddingSize }}
                                primaryText={user.email}
                                rightIcon={<ArrowDownIcon color={muiTheme.palette.alternateTextColor}/>}
                            />
                        </div>
                        <MenuItem onTouchTap={() => this.getMenuItemHandler('/contact')} primaryText='Contact' leftIcon={<PersonIcon/>}/>
                        <MenuItem onTouchTap={() => this.getMenuItemHandler('/search')} primaryText='Search' leftIcon={<SearchIcon/>}/>
                        <MenuItem onTouchTap={() => this.getMenuItemHandler('/reports')} primaryText='Reports' leftIcon={<EventNoteIcon/>}/>
                        <div style={{marginTop: 'auto'}}>
                            <MenuItem disabled>
                                {renderAppInfo()}
                            </MenuItem>
                            <Divider />
                            <MenuItem
                                onTouchTap={this.handleLogout}
                                primaryText='Logout'
                                leftIcon={<ExitToAppIcon/>}
                            />
                        </div>
                        </div>
                </Drawer>
                <Notifications {...notificationSingleton} />
            </div>
        );
    }
}

export default muiThemeable()(Navigation);
