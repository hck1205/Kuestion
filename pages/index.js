import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/actions/userActions'
import { fetchDatetime } from '../redux/actions/timeAction'
import store from '../redux/store'

// import { setMenuLang } from '../redux/actions/langPackAction'

import Head from "../component/common/head";
import Header from "../component/header"
import Menu from "../component/menu"


const mapStateToProps = (store) => (
    {

    }
)

class Index extends Component {

    constructor(props) {
        super(props);
    }

    static async getInitialProps({reduxStore, req}) {

        // initial dispatch
        await Promise.all([
            reduxStore.dispatch(fetchDatetime()),
        ])

        return {};
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
