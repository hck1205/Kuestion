import 'core-js/es6/object'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Head from "../component/common/Head"
import Layout from "../component/common/Layout"
import LangSelector from "../component/common/LangSelector"

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

    componentDidMount() {
    }

    render() {
        return (
            <Layout>
                <style jsx> {`
                  #bodyWrapper {
                    width: 100%;
                    background: #fafafa;
                  }
                `}</style>
            </Layout>
         )
    }
}

export default connect(mapStateToProps)(Index)
// export default Index
