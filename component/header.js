import React from 'react'
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

class header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }

        this.updateSearchText = this.updateSearchText.bind(this);
        this.searchAll = this.searchAll.bind(this);
    }

    componentDidMount() {
        let setDatetime = new Promise(function(resolve, reject) {
            resolve(this.props.dispatch(getDatetime()))
        }.bind(this));

        setDatetime.then(() => {
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
                <div id={"datetimeArea"}>
                    <div id={"datetimeWords"}>{today !== "" ? "Korean date and time:" : ""}</div>
                    <div id={"today"}>{today}</div>
                    <div id={"visitorCounter"}>Visitors 0</div>
                </div>
                <div id={"titleArea"}>
                    <div id={"title"}>EXPATIK</div>
                    <div id={"fullTitle"}>Expatriates in Korea</div>
                </div>
                <div id={"searchArea"}>
                    <input id={"searchField"} type="text" onChange={this.updateSearchText} />
                    <button id={"searchBtn"} onClick={this.searchAll}>Search</button>
                </div>
                <img id={"headerImg"} src={"/static/img/header_img.png"} />

                <style jsx>{`
                  #header {
                    width: 1100px;
                    height: 120px;
                    border: 1px solid black;
                  }
                  #datetimeArea {
                    width: 200px;
                    height: 120px;
                    font-size: 13px;
                    position: absolute;
                  }
                  #datetimeWords {
                    margin-top: 25px;
                    margin-left: 20px;
                  }
                  #today {
                    margin-top: 3px;
                    margin-left: 19px;
                  }
                  #visitorCounter {
                    margin-top: 25px;
                    margin-left: 20px;
                  }
                  #titleArea {
                    width: 250px;
                    height: 120px;
                    margin-left: 220px;
                    position: absolute;
                  }
                  #title {
                    font-size: 35px;
                    font-weight: bold;
                    margin-top: 25px;
                    margin-left: 10px;
                  }
                  #fullTitle {
                    margin-top: 1px;
                    font-size: 18px;
                  }
                  #searchField {
                    margin-left: 420px;
                    height: 25px;
                    width: 300px;
                    margin-top: 42px;
                    position: absolute;
                  }
                  #searchBtn {
                    position: absolute;
                    width: 65px;
                    color: #6a959b;
                    height: 31px;
                    font-weight: bold;
                    background: #e2eff5;
                    border: 1px solid #abd4e8;
                    margin-left: 724px;
                    margin-top: 42px;
                  }
                  #headerImg {
                    width: 269px;
                    margin-left: 830px;
                  }
                `}</style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(header)