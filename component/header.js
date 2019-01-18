import { Component } from 'react'
import { connect } from 'react-redux'
import { updateDatetime } from '../redux/actions/timeAction'
import { formatDatetime } from "../static/js/expatik_help";

const mapStateToProps = (store) => (
    {
        datetime: store.time.datetime,
        fetching: store.time.fetching,
        fetched: store.time.fetched,
        error: store.time.error
    }
)

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }

        this.updateSearchText = this.updateSearchText.bind(this);
        this.searchAll = this.searchAll.bind(this);
    }

    componentWillMount() {}

    componentDidMount() {
        let currentTime = 0

        if(this.props.datetime !== 0) {
            currentTime = this.props.datetime
            setInterval(() => {
                this.props.dispatch(updateDatetime(currentTime += 1000))
            },1000)
        }
    }

    updateSearchText(e) {
        this.setState({searchText: e.target.value})
    }

    searchAll() {
        let searchText = this.state.searchText

        alert(searchText)
    }

    render() {
        let { datetime } = this.props
        const today = formatDatetime(datetime)

        return (
            <div id={"header"}>
                <div id={"titleArea"}>
                    <div id={"title"}>Kuestion</div>
                </div>

                <style jsx>{`
                    #header {
                        width: 1100px;
                        min-height: 50px;
                        border: 1px solid black;
                        font-family: 'Baloo Tamma';
                        margin: auto;
                    }
                    #titleArea {
                        width: 200px;
                        height: 120px;
                        position: absolute;
                    }
                    #title {
                        font-size: 35px;
                        margin-top: 8px;
                        color: #b92b27;
                    }

                `}
                </style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header)
