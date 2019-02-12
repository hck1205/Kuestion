import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../../component/common/Head'
import Layout from '../../component/common/Layout'
import SideMenu from '../../component/SideMenu'

const menuList = ["공지사항", "건의사항", "이용약관"];

const mapStateToProps = (store) => (
    {
    }
);

class Index extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return(
            <Layout menu={"notice"}>
                <Head title="Nomadism Notice" description="" />
                <SideMenu menuList={menuList} />
                <div className={"noticeWrapper"}>
                <style jsx>{`
                  .noticeWrapper {
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