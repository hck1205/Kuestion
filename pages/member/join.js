import React, { Component } from 'react'
import Layout from "../../component/common/Layout";
import Head from "../../component/common/Head";
import Policy from "../../component/MembershipPolicy"

class Join extends Component {
    constructor(props) {
        super(props)

        this.state = {
            policyChkBox: false,
            agreementChkBox: false
        }

        this.changeChkBox = this.changeChkBox.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
    }

    changeChkBox(e, param) {
        this.setState({
            [param]: !e.target.value
        })
    }

    render() {
        return(
            <Layout menu={"login"}>
                <Head title="Nomadism become a member" description="" />
                <div className={"joinWrapper"}>
                    <div className={"joinBox"}>
                        <Policy checkBox={this.state} changeChkBox={this.changeChkBox} />
                    </div>
                </div>
                <style jsx>{`
                    .joinWrapper {
                        min-width: 1140px;
                        min-height: 1200px;
                        font-family: 'Jua', 'Gulim';
                        margin-top: 60px;
                    }
                    .joinBox {
                        width: 900px;
                        min-height: 1100px;
                        border: 1px solid #ddd;
                        margin: auto;
                        background: #fff;
                    }

                `}</style>
            </Layout>
        )
    }
}

export default Join