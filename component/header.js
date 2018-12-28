import { Component } from 'react'
import { connect } from 'react-redux'
import { getDateTime } from '../redux/actions/systemAction'

const mapStateToProps = (store) => (
    {
        dateTime: ""
    }
)

class header extends Component {

    constructor(props) {
        super(props);
        this.props.dispatch(getDateTime())
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="headerContainer"></div>
        )
    }
}

export default connect(mapStateToProps)(header)