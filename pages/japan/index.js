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
            <Layout menu={"japan"}>
                <Head title="Nomadism Japan" description="" />
                <SideMenu />
                <div className={"japanWrapper"}>
                    <style jsx>{`
                  .japanWrapper {
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