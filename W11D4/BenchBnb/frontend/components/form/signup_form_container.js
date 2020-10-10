import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
    // debugger
    return ({
        errors: state.errors,
        formType: 'signup',
        session: state.session
    }) 
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)