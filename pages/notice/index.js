import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../../component/common/Head'
import Layout from "../../component/common/Layout"

const mapStateToProps = (store) => (
    {
    }
)

class Index extends Component {
    render() {
        return(
            <Layout>
                ㅅㄷㄴㅅ
                <style jsx>{`
                  #freeTalkMain {
                    background-color: black;
                    width: 500px;
                    height: 500px;
                  }
                `}</style>
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(Ndex)