import React, { Component } from 'react'

class LeftPanel extends Component {
    render() {
        return(
            <div id={"leftPanelWrapper"}>

                <style jsx>{`
                  #leftPanelWrapper {
                    float: left;
                    width: 15%;
                    height: 1px;
                  }
                `}</style>
            </div>
        )
    }
}

export default LeftPanel
