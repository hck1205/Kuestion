import { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (store) => (
    {

    }
)

class Menu extends Component {
    render() {
        return (
            <div id={"menu"}>
                <style jsx>{`
                    #menu {
                        width: 1100px;
                        height: 35px;
                        background: black;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Menu)