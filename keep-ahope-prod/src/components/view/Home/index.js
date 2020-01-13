import React from 'react';

import Login from 'components/controller/Login'

import { getImageForEnv } from 'static/images/index'

const Home = (props) => {

    const { user, userPermissions } = props;

    return (
        <div className='page'>
            <div className='text-content'>
                {!userPermissions.basic ? (
                    <div>
                        <Login />
                    </div>
                ) : (
                    <div className="row middle-sm">
        
                        <section className="col-xs-12 col-sm-8 col-md-6">
        
                            <h2>Welcome!</h2>
        
                        </section>
        
                    </div>
                ) }
            </div>
        </div>
    );
}

export default Home;
