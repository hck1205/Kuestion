import 'core-js/es6/object'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from "../../component/common/Layout"

// import { setMenuLang } from '../redux/actions/langPackAction'

const mapStateToProps = (store) => {
  // console.log(store)
  return({})
}


class Index extends Component {

  constructor(props) {
    super(props);
  }

  static async getInitialProps({reduxStore, req, query}) {
    return {};
  }

  componentDidMount() {
  }

  render() {
    return (
        <Layout>
          <div id={"kculturePage"}>

            <style jsx>{`
              #bodyWrapper {
                  width: 100%;
                  background: #fafafa;
              }
            `}</style>
          </div>
        </Layout>
    )
  }
}

export default connect(mapStateToProps)(Index)
