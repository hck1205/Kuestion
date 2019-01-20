import React, { Component } from 'react'
import SideMenu from './SideMenu'

class Body extends Component {
    render() {
        return(
            <div id={"Body"}>
                <SideMenu />
                <style jsx>{`
                  #Body {
                    width: 1100px;
                    height: 800px;
                    margin: auto;
                    border: 1px solid black;
                  }
                `}</style>
            </div>
        )
    }
}

export default Body