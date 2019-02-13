import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../../component/common/Head'
import Layout from '../../component/common/Layout'
import axios from 'axios'
import axiosConfig from '../../config/axiosConfig'
import Router, { withRouter } from 'next/router'

const mapStateToProps = (store) => (
    {
    }
)

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "",
            pw: "",
        }

        this.updateLoginInfo = this.updateLoginInfo.bind(this);
        this.sendLoginForm = this.sendLoginForm.bind(this);
    }

    componentDidMount() {

    }
    updateLoginInfo(e) {
        this.setState({
            [e.target.name]: event.target.value
        });
    }

    sendLoginForm(e) {
        let data = {
            id: this.state.id,
            pw: this.state.pw
        }

        axios(axiosConfig(
            "POST",
            "/user/login",
            data)).then((res)=>{
            console.log(res)
        })

        // axios.post('/user/login', {
        //     id: this.state.id,
        //     pw: this.state.pw
        // }).then(function (response) {
        //     console.log(response);
        // }).catch(function (error) {
        //     console.log(error);
        // });
    }

    render() {
        return(
            <Layout menu={"login"}>
                <Head title="Nomadism Login" description="" />
                <div className={"loginWrapper"}>
                    <div className={"loginBox"}>
                        <div id={"loginText"}>로그인</div>
                        <form>
                            <input name={"id"} type={"text"} placeholder={"ID"} onChange={(e)=>this.updateLoginInfo(e)} />
                            <input name={"pw"} type={"password"} placeholder={"PASSWORD"} autoComplete={"on"} onChange={(e)=>this.updateLoginInfo(e)} />
                            <div className={"loginBtn"} onClick={(e)=>this.sendLoginForm(e)}>로그인</div>
                        </form>
                        <div className={"snsLoginWrapper"}>
                            <img src={"/static/img/sns_icon/google.png"} className={"snsImg"}/>
                            <img src={"/static/img/sns_icon/facebook.png"} className={"snsImg"}/>
                            <img src={"/static/img/sns_icon/kakao.png"} className={"snsImg"}/>
                            <img src={"/static/img/sns_icon/naver.png"} className={"snsImg"}/>
                        </div>
                        <div className={"joinWrapper"}>
                            <div id={"joinText"} onClick={(e)=>Router.push({pathname: "/member/policy"})}>처음오셨나요? 회원가입</div>
                            <div id={"forgotText"}>비밀번호를 잊으셨나요? 비밀번호찾기</div>
                        </div>
                    </div>
                    <style jsx>{`

                    #loginText {
                        font-size: 20px;
                        margin-top: 15px;
                        margin-left: 15px;
                    }
                    #joinText {
                        margin-top: 10px;
                        margin-left: 15px;
                        cursor: pointer;
                    }
                    #forgotText {
                        margin-top: 10px;
                        margin-left: 15px;
                        cursor: pointer;
                    }
                    .joinWrapper {
                        margin-top: 50px;
                        height: 65px;
                        border-top: 1px solid #eaeaea;
                        border-bottom: 1px solid #eaeaea;
                        color: #757575;
                        text-align: center;
                    }
                    .loginWrapper {
                        min-width: 1140px;
                        min-height: 700px;
                        font-family: 'Jua', 'Gulim';
                        margin-top: 60px;
                    }
                    .loginBox {
                        width: 500px;
                        min-height: 350px;
                        border: 1px solid #ddd;
                        margin: auto;
                        background: #fff;
                    }
                    .loginBox input {
                        border: 0;
                        outline: 0;
                        background: transparent;
                        border-bottom: 1px solid #bdbdbd;
                        display: block;
                        margin-top: 15px;
                        margin-left: 15px;
                        width: 470px;
                        float:left;
                    }
                    .snsLoginWrapper {
                        margin-top: 90px;
                        margin-left: 12px;
                    }
                    .snsLoginBtn {
                        border: 1px solid black;
                        width: 210px;
                        height: 20px;
                        border-radius: 3px;
                        padding: 5px;
                        padding-top: 5px;
                        cursor: pointer;
                        margin-left: 10px;
                        margin-top: 10px;
                    }
                    .snsImg {
                        width: 25px;
                        height: 25px;
                        margin-right: 15px;
                        cursor: pointer;
                    }
                    .loginBtn {
                        background-color: #e7e7e7;
                        color: black;
                        font-size: 16px;
                        cursor: pointer;
                        float: right;
                        width: 60px;
                        text-align: center;
                        height: 20px;
                        padding-top: 5px;
                        border-radius: 3px;
                        border: 1px solid #dbdbdb;
                        margin-top: 15px;
                        margin-right: 15px;
                    }
                `}</style>
                </div>
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(withRouter(Login))