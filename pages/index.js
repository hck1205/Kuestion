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
        return (
            <div id="mainPage">
                <Head title={""} description={""} />
                <Header />
                <style jsx> {`
                    #mainPage {
                        width: 1200px;
                        margin: auto;
                        background: aliceblue;
                    }
                `}</style>
            </div>
         )
    }
}

export default connect(mapStateToProps)(Index)
// export default Index