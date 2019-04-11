import React, { useContext } from 'react';
import AuthContext from "../context/auth-context";

const SignIn = (props) => {

    const context = useContext(AuthContext)

    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">Authorization with Bpower2 account</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form id="signInModal" onKeyPress={e => e.key === 'Enter' ? context.signIn() : null}>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Login:</label>
                            <input type="text" className="form-control" id="login" onChange={(e) => context.login(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Password:</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => context.password(e.target.value)} />
                        </div>
                    </form>
                    {context.alert ? <div className="text-danger">Wrong login or password!</div> : null}
                </div>
                <div className="modal-footer">
                    <button id="closeLoginModal" type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={context.signIn}>
                        {context.loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Sign in'}
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;