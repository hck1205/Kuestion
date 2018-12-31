import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/actions/userActions'
// import { setMenuLang } from '../redux/actions/langPackAction'

import Head from "../component/common/head";
import Header from "../component/header"


const mapStateToProps = (store) => (
    {
        user: store.user.user,
        userFetched: store.user.fetched,
        // menu: store.langPack
    }
)

class Index extends Component {

    constructor(props) {
        super(props);
        // this.props.dispatch(setMenuLang("KO"))
    }

    componentWillMount() {
        // this.props.dispatch(fetchUser())
    }

    render() {
        if(this.props.user.length > 0) {
            return (
                <div>
                    <Header />
                    {this.props.user[0].name}
                </div>
            )
        }  else {
            return (
                <div>
                    <Header />
                </div>
            )
        }
        // return (
            {/*<div id="mainPage">*/}
                {/*<Header />*/}
            // </div>
        // )
    }
}

export default connect(mapStateToProps)(Index)
// export default Index