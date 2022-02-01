import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoutes({ isAdmin, component: Component , ...rest}) {

    const { isAuthenticate, loading, user } = useSelector(state => state.auth);

    return (
        <React.Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render= {props => {
                        if(isAuthenticate === false){
                            return <Redirect to='/login' />
                        }

                        if(isAdmin === true && user.role !== 'admin'){
                            return <Redirect to='/' />
                        }

                        return <Component {...props} />
                    }}
                
                />
            )}

        </React.Fragment>
    )
}

export default ProtectedRoutes;

