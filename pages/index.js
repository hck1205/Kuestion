import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/actions/userActions'

const mapStateToProps = (store) => (
    {
        user: store.user.user,
        userFetched: store.user.fetched,
    }
)

class Index extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUser())
    }

    render() {
        console.log(this.props.user)
        return(
            <div>{}</div>
        )
    }
}

export default connect(mapStateToProps)(Index)