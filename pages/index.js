import 'core-js/es6/object'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from "../component/common/Head"
import LangSelector from "../component/common/LangSelector"
import Header from "../component/MainMenu"
import Body from "../component/Body"

import { fetchDatetime } from '../redux/actions/timeAction'
// import { setMenuLang } from '../redux/actions/langPackAction'

const mapStateToProps = (store) => (
    {

    }
)

class Index extends Component {

    constructor(props) {
        super(props);
    }

    static async getInitialProps({reduxStore, req, query}) {
        // await Promise.all([ // initial dispatch
        //     reduxStore.dispatch(fetchDatetime()),
        // ]).then(() => {
        //     return {}
        // });

        return {};
    }

    componentWillMount() {
        // this.props.dispatch(setMenuLang("KO"))
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id={"mainPage"}>
                <Head title={""} description={""} />
                <div id={"headerWrapper"}>
                    <LangSelector />
                    <Header />
                </div>
                <div id={"bodyWrapper"}>
                    <Body />
                </div>

                <style jsx> {`
                    #mainPage {
                        margin: auto;
                        overflow: hidden;
                    }
                    #headerWrapper {
                        width: 100%;
                        border: 1px solid #ddd;
                        box-shadow: 0 3px 2px -2px rgba(200,200,200,0.2);
                    }
                    #bodyWrapper {
                        width: 100%;

                        background: #fafafa;
                    }
                `}</style>
            </div>
         )
    }
}

export default connect(mapStateToProps)(Index)
// export default Index
