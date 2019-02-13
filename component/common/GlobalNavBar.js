import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router, { withRouter } from 'next/router'
import { updateDatetime } from '../../redux/actions/timeAction'
import { changeMenu, toggleOverlay } from '../../redux/actions/commonAction'
import { formatDatetime } from "../../static/js/nomadism_help";

const category = {
    notice: "notice",
    germany: "germany",
    australia: "australia",
    japan: "japan",
    login: "login"
};


class GlobalNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            activeMenu: this.props.menu
        }

        this.updateSearchText = this.updateSearchText.bind(this);
        this.searchAll = this.searchAll.bind(this);
    }

    componentWillMount() {}

    componentDidMount() {

        // verify props have changed to avoid an infinite loop
        // if (query.id !== prevProps.router.query.id) {
        // fetch data based on the new query
        // }
        // let currentTime = 0
        //
        // if(this.props.datetime !== 0) {
        //     currentTime = this.props.datetime
        //     setInterval(() => {
        //         this.props.dispatch(updateDatetime(currentTime += 1000))
        //     },1000)
        // }

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
        let path = this.state.activeMenu === param ?
                    "/static/img/menu/"+ param + "_active.png" : "/static/img/menu/"+ param + ".png";

        return {backgroundImage: `url(${path})`}
    }

    getActiveClass(param) {
        return this.state.activeMenu === param ? "active" : ""
    }

    removeOverlay() {
        this.props.dispatch(toggleOverlay(false))
    }

    setOverlay() {
        this.props.dispatch(toggleOverlay(true))
    }

    routeHandler(param) {
        switch (param) {
            case "main": {
                Router.push({pathname: '/'})
            }
            break;

            case "notice": {
                Router.push({pathname: '/notice'})
            }
            break;

            case "germany": {
                Router.push({pathname: '/germany'})
            }
            break;

            case "australia": {
                // Router.push({pathname: '/australia'})
            }
            break;

            case "japan": {
                    // Router.push({pathname: '/japan'})
                }
            break;

            case "login": {
                Router.push({pathname: '/member/login'})
            }
            break;
        }

    }

    render() {
        // let { datetime } = this.props
        // const today = formatDatetime(datetime)

        return (
            <div className={"headerWrapperForBorder"}>
                <div id={"header"}>
                    <div id={"titleWrapper"}>
                        <a id={"title"} onClick={()=>this.routeHandler("main")}>
                            <div className={"headerLogo"}><img src={"/static/img/logo.png"} /></div>
                            Nomadism
                        </a>
                    </div>

                    <a className={"menuWrapper " + this.getActiveClass("notice")}
                       onClick={()=>this.routeHandler("notice")}>
                        <div style={this.getMenuIcon(category.notice)} className={"menuImage"} />
                        <div className={"menu " + this.getActiveClass("notice")}>이용안내</div>
                    </a>

                    <a className={"menuWrapper " + this.getActiveClass("germany")}
                       onClick={()=>this.routeHandler("germany")}>
                        <div style={this.getMenuIcon(category.germany)} className={"menuImage"} />
                        <div className={"menu " + this.getActiveClass("germany")}>독 일</div>
                    </a>

                    <a className={"menuWrapper " + this.getActiveClass("australia")}
                       onClick={()=>this.routeHandler("australia")}>
                        <div style={this.getMenuIcon(category.australia)} className={"menuImage"} />
                        <div className={"menu " + this.getActiveClass("australia")}>호 주[준비중]</div>
                    </a>

                    <a className={"menuWrapper " + this.getActiveClass("japan")}
                       onClick={()=>this.routeHandler("japan")}>
                        <div style={this.getMenuIcon(category.japan)} className={"menuImage"} />
                        <div className={"menu " + this.getActiveClass("japan")}>일 본[준비중]</div>
                    </a>

                    <a className={"menuWrapper " + this.getActiveClass("login")} id={"login"}
                       onClick={()=>this.routeHandler("login")}>
                        <div style={this.getMenuIcon(category.login)} className={"menuImage"} />
                        <div className={"menu " + this.getActiveClass("login")}>로그인/회원가입</div>
                    </a>

                    {/*<div className={"searchWrapper"}>*/}
                        {/*<input className={"searchField"} type={"text"}*/}
                               {/*onBlur={() => this.removeOverlay()} onFocus={() => this.setOverlay()} />*/}
                        {/*<div className={"searchIcon"} />*/}
                    {/*</div>*/}
                </div>

                <style jsx>{`
                        .headerWrapperForBorder {
                            border-bottom: 1px solid #bbb;
                            box-shadow: 0 3px 2px -2px rgba(200,200,200,0.2);
                            min-width: 2000px;
                        }
                        #header {
                            width: 1100px;
                            min-height: 50px;
                            margin: auto;
                            font-family: 'Jua', 'Gulim';
                            font-weight: bold;
                        }
                        #titleWrapper {
                            margin-right: 65px;
                            margin-top: 12px;
                            float: left;
                        }
                        .headerLogo{
                            float:left;
                        }
                        .headerLogo img {
                            width: 50px;
                            height: 50px;
                            float: left;
                            margin-top: -15px;
                            margin-left: 20px;
                        }
                        #title {
                            font-size: 28px;
                            color: #b92b27;
                            font-family: 'Baloo Tamma', 'Gulim';
                        }
                        .menuWrapper {
                            float: left;
                            min-height: 48px;
                            margin-right: 50px;
                        }
                        .menuWrapper.active {
                            border-bottom: 2px solid #b92b27;
                        }
                        .menuImage {
                            float: left;
                            width: 20px;
                            height: 20px;
                            background-size: 100% 100%;
                            background-position: center;
                            background-repeat: no-repeat;
                            margin-top: 18px;
                            border-radius: 3px;
                        }
                        .menu {
                            float: left;
                            font-size: 20px;
                            font-weight: 100;
                            margin-top: 18px;
                            margin-left: 5px;
                            color: #b2b2b2;
                        }
                        .menu.active {
                            color: #b92b27;
                        }
                        #login {
                            float: right;
                            margin-right: 0px;
                        }
                        .searchWrapper {
                            float: right;
                            margin-top: 10px;
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
                            margin-left: 6px;
                        }
                        .searchField {
                            width: 165px;
                            border: none;
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default withRouter(GlobalNavBar)
