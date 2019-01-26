import { Component } from 'react'
import { connect } from 'react-redux'
import { updateDatetime } from '../redux/actions/timeAction'
import { toggleOverlay } from '../redux/actions/commonAction'
import { formatDatetime } from "../static/js/expatik_help";


const category = {
    culture: "culture",
    shareDaily: "shareDaily",
    living: "living",
    freeTalk: "freeTalk"
};

const mapStateToProps = (store) => (
    {
        // lang: store.lang.
        datetime: store.time.datetime,
        fetching: store.time.fetching,
        fetched: store.time.fetched,
        error: store.time.error
    }
)

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
        }

        this.updateSearchText = this.updateSearchText.bind(this);
        this.searchAll = this.searchAll.bind(this);
    }

    componentWillMount() {}

    componentDidMount() {
        // let currentTime = 0
        //
        // if(this.props.datetime !== 0) {
        //     currentTime = this.props.datetime
        //     setInterval(() => {
        //         this.props.dispatch(updateDatetime(currentTime += 1000))
        //     },1000)
        // }
        //
        // console.log(this.props.datetime)
    }

    updateSearchText(e) {
        this.setState({searchText: e.target.value})
    }

    searchAll() {
        let searchText = this.state.searchText

        alert(searchText)
    }

    getMenuIcon(param) {
        let path = "/static/img/menu/"+ param + ".png";

        return { backgroundImage: `url(${path})` }
    }

    removeOverlay() {
        this.props.dispatch(toggleOverlay(false))
    }

    setOverlay() {
        this.props.dispatch(toggleOverlay(true))
    }

    render() {
        // let { datetime } = this.props
        // const today = formatDatetime(datetime)

        return (
            <div id={"header"}>
                <div id={"titleWrapper"}>
                    <a id={"title"}>Kuestion</a>
                </div>

                <a className={"menuWrapper"} onClick={""}>
                    <div style={this.getMenuIcon(category.freeTalk)} className={"menuImage"} />
                    <div className={"menu"}>Free Talk</div>
                </a>

                <a className={"menuWrapper"}>
                    <div style={this.getMenuIcon(category.culture)} className={"menuImage"} />
                    <div className={"menu"} >Culture</div>
                </a>

                <a className={"menuWrapper"}>
                    <div style={this.getMenuIcon(category.shareDaily)} className={"menuImage"} />
                    <div className={"menu"}>Share Daily</div>
                </a>

                <a className={"menuWrapper"}>
                    <div style={this.getMenuIcon(category.living)} className={"menuImage"} />
                    <div className={"menu"}>Living in Korea</div>
                </a>

                <div className={"searchWrapper"}>
                    <div className={"searchIcon"} />
                    <input className={"searchField"} type={"text"}
                           onBlur={() => this.removeOverlay()} onFocus={() => this.setOverlay()} />
                </div>

                <style jsx>{`
                    a:hover {
                        cursor: pointer;
                    }
                    #header {
                        width: 1100px;
                        min-height: 50px;
                        margin: auto;
                        font-family: 'Baloo Tamma', 'Gulim';
                        font-weight: bold;
                    }
                    #titleWrapper {
                        margin-right: 50px;
                        margin-top: 10px;
                        float: left;
                    }
                    #title {
                        font-size: 28px;
                        margin-top: 11px;
                        margin-left: 33px;
                        color: #b92b27;
                    }
                    .menuWrapper {
                        float: left;
                        min-height: 48px;
                        margin-right: 20px;
                    }
                    .menuImage {
                        float: left;
                        width: 24px;
                        height: 24px;
                        background-size: 100% 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                        margin-top: 14px;
                        border-radius: 3px;
                    }
                    .menu {
                        float: left;
                        font-size: 20px;
                        font-family: 'Baloo Tamma', 'Gulim';
                        font-weight: 100;
                        margin-top: 18px;
                        margin-left: 3px;
                        color: #b2b2b2;
                    }
                    .searchWrapper {
                        float: left;
                        margin-top: 9px;
                        width: 200px;
                        height: 30px;
                        border: 1px solid #b2b2b2;
                        border-radius: 3px;
                        display: flex;
                    }
                    .searchIcon {
                        width: 22px;
                        height: 22px;
                        background-size: 100% 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-image: url('/static/img/search.png');
                        margin-top: 4px;
                        margin-left: 3px;
                    }
                    .searchField {
                        width: 170px;
                        margin-left: 5px;
                        border: none;
                    }
                `}
                </style>

            </div>
        )
    }
}

export default connect(mapStateToProps)(MainMenu)
