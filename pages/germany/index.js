import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../../component/common/Head'
import Layout from '../../component/common/Layout'
import SideMenu from '../../component/SideMenu'
import BoardTitle from '../../component/BoardTitle'

const menuList = [
    "노마드가이드",
    "구직정보",
    "독어공부",
    "꿀팁",
    "질문",
];

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
        <Layout menu={"germany"}>
          <Head title="Nomadism Germany" description="" />
          <SideMenu menuList={menuList}/>
          <div className={"germanyWrapper"}>
            <BoardTitle />
            <BoardTitle />
            <BoardTitle />
            <BoardTitle />
            <BoardTitle />
            <BoardTitle />

            <style jsx>{`
                  .germanyWrapper {
                    float: left;
                    min-width: 700px;
                    min-height: 700px;
                  }
                `}
            </style>
          </div>
        </Layout>
    )
  }
}

export default connect(mapStateToProps)(Index)
