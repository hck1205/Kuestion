import 'core-js/fn/object/assign'
import Head from "./Head"
import GNB from "./GlobalNavBar"
import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"

const layoutStyle = {
    margin: "auto",
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Head />
        <GNB menu={props.menu} />
        <div className={"bodyWrapper"}>
            <div className={"contentWrapper"}>
                {/*<LeftPanel />*/}
                {props.children}
                {/*<RightPanel />*/}
            </div>
        </div>
        <style jsx> {`
        .bodyWrapper {
            overflow:hidden;
            width: 100%;
            background: #fafafa;
            padding-top: 10px;
            margin: auto;
        }
        .contentWrapper {
            margin: auto;
            width: 1100px;
        }
        `}</style>
    </div>
)

export default Layout
