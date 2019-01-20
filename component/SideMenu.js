import React, { Component } from 'react'

class SideMenu extends Component {
    render() {
        return(
            <div id={"SideMenu"}>

                <style jsx>{`
                  #SideMenu {
                    width: 180px;
                    height: 800px;
                    border-right: 1px solid black;
                  }
                `}</style>
            </div>
        )
    }
}

export default SideMenu