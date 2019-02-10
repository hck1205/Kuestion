import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (store) => (
    {
        // lang: store.lang.
    }
)
class SideMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeMenu: this.props.menuList[0]
        }
    }

    render() {
        return(
            <div id={"subMenuWrapper"}>
                <div id={"subMenuListWrapper"}>
                {
                    this.props.menuList.map((menu, index) => {

                        let active = this.state.activeMenu === menu ? "active" : "";
                        return(
                            <a key={index} className={"submenu " + active}>
                                <img src={""} />{menu}
                            </a>
                        )
                    })
                }
                </div>
                <style jsx>{`
                  #subMenuWrapper {
                    float: left;
                    width: 220px;
                    min-height: 700px;
                  }
                  #subMenuListWrapper {
                    margin-top: 15px;
                    font-family: 'Jua', 'Gulim';
                    font-size: 18px;
                    width: 130px;
                    margin-left: 30px;
                  }
                  .submenu {
                    margin-bottom: 12px;
                    display: block;
                  }
                  .submenu.active {
                    padding-left: 5px;
                    padding-top: 5px;
                    padding-bottom: 3px;
                    border-radius: 3px;
                    background: #e6e6e6;
                  }
                `}</style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SideMenu)