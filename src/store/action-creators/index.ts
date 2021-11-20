import * as AuthActionCreators from './auth'
import * as EventActionCreators from './event'

export default {
    ...AuthActionCreators,
    ...EventActionCreators
}
