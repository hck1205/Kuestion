import { Component } from 'react'
import { connect } from 'react-redux'
import { getDatetime } from '../redux/actions/timeAction'

const mapStateToProps = (store) => (
    {
        datetime: store.time.datetime,
        // fetching: store.time.fetching,
        // fetched: store.time.fetched,
        // error: store.time.error
    }
)

class header extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getDatetime())
    }

    componentDidMount() {
        console.log()
        // this.props.dispatch(set)
    }

    startTimer(today) {
        setInterval(()=> {
            console.log(today)
        }, 1000)
    }

    render() {
        let { datetime } = this.props

        if(datetime !== "") {
            return(
                <div>{datetime}</div>
            )
        } else {
            return (
                <div>test</div>
            )
        }
    }
}

export default connect(mapStateToProps)(header)