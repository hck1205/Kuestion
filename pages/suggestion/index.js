import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../../component/common/Head'
import Layout from '../../component/common/Layout'
import SideMenu from '../../component/SideMenu'

const mapStateToProps = (store) => (
    {
    }
)

class Index extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return(
            <Layout menu={"suggestion"}>
                <Head title="Nomadism Suggestion" description="" />
                <SideMenu />
                <div className={"suggestionWrapper"}>
                    <style jsx>{`
                  .suggestionWrapper {
                    float: left;
                    background-color: black;
                    min-width: 920px;
                    min-height: 700px;
                  }
                `}</style>
                </div>
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(Index)