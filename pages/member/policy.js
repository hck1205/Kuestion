import React, { Component } from 'react'
import Router, { withRouter } from 'next/router'
import axios from 'axios'
import axiosConfig from '../../config/axiosConfig'
import 'core-js/library/fn/symbol'
import Layout from "../../component/common/Layout";
import Head from "../../component/common/Head";
import PolicyText from "../../component/MembershipPolicy"


class Policy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            policyChkBox: false,
            agreementChkBox: false
        }

        this.changeChkBox = this.changeChkBox.bind(this);
        this.validateAgreement = this.validateAgreement.bind(this);
    }

    componentDidMount() {
        if(this.props.router.pathname !== this.props.router.asPath) {
            window.history.replaceState({}, "Nomadism become a member", "/member/policy")
            alert("이용약관 및 개인정보 수집 이용에 동의하셔야합니다.")
        }
    }

    changeChkBox(e, param) {
        this.setState({
            [param]: !e.target.value
        })
    }

    validateAgreement() {
        let {policyChkBox, agreementChkBox} = this.state;

        if(policyChkBox && agreementChkBox) {
            // axios.(axiosConfig(
            //   "post",
            //   "/member/agree"))
            Router.push({pathname: '/member/join'})
        } else {
            alert("이용약관 및 개인정보 수집 이용에 동의하셔야합니다.")
        }
    }
    render() {
        return(
            <Layout menu={"login"}>
                <Head title="Nomadism become a member" description="" />
                <div className={"policyWrapper"}>
                    <div className={"policyBox"}>
                        <PolicyText checkBox={this.state} changeChkBox={this.changeChkBox} />
                        <div>
                            <div className={"joinBtn"} onClick={(e)=>this.validateAgreement()}>회원가입</div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .policyWrapper {
                        min-width: 1140px;
                        min-height: 1200px;
                        font-family: 'Noto Sans KR';
                        margin-top: 60px;
                    }
                    .policyBox {
                        width: 900px;
                        min-height: 800px;
                        border: 1px solid #ddd;
                        margin: auto;
                        background: #fff;
                    }
                    .joinBtn {
                        background-color: #e7e7e7;
                        color: black;
                        font-size: 16px;
                        cursor: pointer;
                        width: 70px;
                        text-align: center;
                        height: 23px;
                        padding-top: 8px;
                        border-radius: 3px;
                        border: 1px solid #dbdbdb;
                        font-family: 'Jua', 'Gulim';
                        margin: auto;
                        margin-top: 30px;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default withRouter(Policy)