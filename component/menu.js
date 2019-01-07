import { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (store) => (
    {

    }
)

class Menu extends Component {
    constructor(props) {
        super(props)

        this.routePage = this.routePage.bind(this)
    }

    routePage(param) {

    }

    render() {
        return (
            <div id={"menuArea"}>
                <div id={"menuHome"} onClick={() => this.routePage("home")}>
                    <div id={"fontHome"}>Home</div>
                </div>
                <style jsx>{`
                    #menuArea {
                        width: 1100px;
                        height: 35px;
                        border: 1px solid;
                        font-family: 'Viga', serif;
                    }
                    #menuHome {
                        width: 55px;
                        height: 35px;
                        border-right: 1px solid black;
                    }
                    #fontHome {
                        margin-left: auto;
                        position: relative;
                        width: 48px;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                `}
                </style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Menu)