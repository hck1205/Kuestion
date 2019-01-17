import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/actions/userActions'
import { fetchDatetime } from '../redux/actions/timeAction'

// import { setMenuLang } from '../redux/actions/langPackAction'

import Head from "../component/common/head";
import Header from "../component/header"
import Menu from "../component/menu"


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
    }


    componentWillMount() {
        // this.props.dispatch(setMenuLang("KO"))
    }

    render() {
        return (
            <div id="mainPage">
                <Head title={""} description={""} />
                <Header />
                {/*<Menu />*/}
                <style jsx> {`
                    #mainPage {
                        width: 1100px;
                        margin: auto;
                    }
                `}</style>
            </div>
         )
    }
}

export default connect(mapStateToProps)(Index)
// export default Index