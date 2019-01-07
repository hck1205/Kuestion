import { Component } from 'react'
import { connect } from 'react-redux'
import { getDatetime, updateDatetime } from '../redux/actions/timeAction'
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

    componentDidMount() {
        new Promise(function(resolve, reject) {
            resolve(this.props.dispatch(getDatetime()))
        }.bind(this)).then(() => {
            let datetime = this.props.datetime
            setInterval(() => {
                this.props.dispatch(updateDatetime(datetime += 1000))
            },1000)
        });
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
                    <img id={"headerImg"} src={"/static/img/header_icon.png"} />
                    <div id={"title"}>EXPATIK</div>
                    <div id={"fullTitle"}>Expatriates in Korea</div>
                </div>
                <div id={"searchArea"}>
                    <input id={"searchField"} type="text" onChange={this.updateSearchText} />
                    <button id={"searchBtn"} onClick={this.searchAll}>Search</button>
                </div>
                <div id={"datetimeArea"}>
                    <div id={"datetimeWords"}>{today !== "" ? "Korean date and time:" : ""}</div>
                    <div id={"today"}>{today}</div>
                    <div id={"visitorCounter"}>Visitors 0</div>
                </div>
                <style jsx>{`
                    #header {
                        width: 1100px;
                        height: 120px;
                        border: 1px solid black;
                        font-family: 'Viga', serif;
                    }
                    #headerImg {
                        width: 66px;
                        margin-top: 25px;
                        position: absolute;
                    }
                    #datetimeWords {
                        margin-top: 28px;
                        margin-left: 20px;
                    }
                    #today {
                        margin-top: 3px;
                        margin-left: 19px;
                    }
                    #visitorCounter {
                        margin-top: 15px;
                        margin-left: 20px;
                    }
                    #titleArea {
                        width: 250px;
                        height: 120px;
                        margin-left: 30px;
                        position: absolute;
                    }
                    #title {
                        font-size: 40px;
                        font-weight: bold;
                        margin-top: 22px;
                        margin-left: 80px;
                    }
                    #fullTitle {
                        margin-top: 1px;
                        margin-left: 80px;
                        font-size: 18px;
                    }
                    #searchField {
                        height: 25px;
                        width: 330px;
                        margin-top: 42px;
                        margin-left: 390px;
                        position: absolute;
                    }
                    #searchBtn {
                        position: absolute;
                        width: 65px;
                        color: #6a959b;
                        height: 31px;
                        background: #e2eff5;
                        border: 1px solid #abd4e8;
                        margin-left: 724px;
                        margin-top: 42px;
                    }
                    #datetimeArea {
                        width: 200px;
                        height: 120px;
                        font-size: 13px;
                        position: absolute;
                        margin-left: 900px;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header)