import React, { Component } from 'react'
import Router, { withRouter } from 'next/router'
import axios from 'axios'
import axiosConfig from '../../config/axiosConfig'

import Layout from "../../component/common/Layout";
import Head from "../../component/common/Head";



class Join extends Component {
  constructor(props) {
    super(props)

    this.state = {
      warningText: "test",
      isIdDup: false,
      isNickNameDup: false,
    }

    this.checkDuplication = this.checkDuplication.bind(this)
  }

  componentDidMount() {

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

  checkDuplication(param) {

    axios(axiosConfig(
      "post",
      "/user/checkdup",
      {
        checkField: param,
        checkValue: document.getElementById(param).value
      })
    ).then((res) => {

    })

  }

  render() {
    return(
      <Layout menu={"login"}>
        <Head title="Nomadism become a member" description="" />
        <div className={"joinWrapper"}>
          <div className={"joinBox"}>
            <div className={"headText"}>회원가입</div>
            <div className={"generalWarningTextField"}>{this.state.warningText}</div>

            <div className={"formWrapper"}>
              <div className={"text"}>아이디</div>
              <input className={"inputField"} type={"text"} id={"id"} placeholder={"아이디"} />
              <div className={"checkDupBtn"} onClick={(e)=>this.checkDuplication("id")}>중복확인</div>

              <div className={"text"}>닉네임</div>
              <input className={"inputField"} type={"text"} id={"nickname"} placeholder={"닉네임"}/>
              <div className={"checkDupBtn"} onClick={(e)=>this.checkDuplication("nickname")}>중복확인</div>

              <div className={"text"}>비밀번호</div>
              <input className={"inputField"} type={"text"} placeholder={"비밀번호 (문자,숫자조합)"} maxLength={20}/>
              <div className={"text pwText"}>비밀번호 입력 (보통 이상, 8-20자)</div>
              
              <div>비밀번호 확인</div>
              <input className={"inputField"} type={"text"} placeholder={"비밀번호 재입력"} maxLength={20}/>
              <div className={"text pwText"}>비밀번호 재입력</div>

              <div className={"text"}>이메일</div>
              <input className={"inputField"} type={"text"} id={"email"} placeholder={"이메일"}/>
              <div className={"checkDupBtn"} onClick={(e)=>this.checkDuplication("email")}>중복확인</div>
              <div className={"text mailText"}>최초 로그인시 이메일 인증이 필요합니다.</div>
            </div>

            <div id={"joinBtn"} onClick={""}>회원가입</div>
          </div>
        </div>
        <style jsx>{`
                   .joinWrapper {
                      min-width: 1140px;
                      min-height: 1200px;
                      font-family: 'Noto Sans KR';
                      margin-top: 60px;
                   }
                   .joinBox {
                      width: 430px;
                      min-height: 600px;
                      border: 1px solid #ddd;
                      margin: auto;
                      background: #fff;
                      font-family: 'Jua', 'Gulim'
                   }
                   .headText {
                      font-size: 20px;
                      margin-top: 15px;
                      margin-left: 15px;
                      margin-bottom: 20px;
                   }
                   .generalWarningTextField {
                      border: 1px solid #b92b27;
                      width: 400px;
                      height: 25px;
                      color: #b92b27;
                      padding-top: 7px;
                      border-radius: 4px;
                      display: block;
                      margin: auto;
                      margin-bottom: 5px;
                      text-align: center;
                      
                   }
                   .formWrapper {
                      font-size: 16px;
                      margin:auto;
                      width: 400px;
                      height: 440px;
                   }
                   .fieldInLine {
                     background: lightblue;
                     width: 100%;
                     height: 40px;
                   }
                   .text {
                      padding-top: 6px;
                      margin-bottom: 5px;
                      margin-top: 15px;
                   }
                   .text.pwText {
                      display: inline;
                      font-size: 14px;
                      margin-left: 10px;
                      font-family: 'Noto Sans KR';
                      color: #838383;
                   }
                   .text.mailText {
                      margin-top: 0px;
                      margin-left: 4px;
                      color: #b92b27;
                      font-size: 14px;
                   }
                   .inputField {
                      width: 180px;
                      height: 20px;
                      border: 1px solid #dbdbdb;
                      border-radius: 4px;
                      padding-top: 5px;
                      padding-bottom: 5px;
                      padding-left: 5px;
                      display: inline-block;
                      margin-bottom: 5px;
                   }
                   .checkDupBtn {
                      padding: 5px;
                      border: 1px solid #dbdbdb;
                      border-radius: 4px;
                      width: 55px;
                      text-align: center;
                      background: #e7e7e7;
                      display: inline-block;
                      margin-left: 10px;
                      cursor: pointer;
                   }
                   #joinBtn {
                      padding: 5px;
                      border: 1px solid #dbdbdb;
                      border-radius: 4px;
                      width: 55px;
                      text-align: center;
                      background: #e7e7e7;
                      margin: auto;
                   }
                `}</style>
      </Layout>
    )
  }
}

export default withRouter(Join)