import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../context/auth-context'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const context = useContext(AuthContext)
    return (
        <Route
            render={props =>
                context.isAuth ? <Component {...props} /> : <Redirect to="/" />
            }
            {...rest}
        />
    )

};

export default ProtectedRoute