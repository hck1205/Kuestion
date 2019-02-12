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
            <LeftPanel />
            {props.children}
            <RightPanel />
        </div>
        <style jsx> {`
        .bodyWrapper {
            overflow:hidden;
            width: 2000px;
            background: #fafafa;
            padding-top: 10px;
        }
        `}</style>
    </div>
)

export default Layout