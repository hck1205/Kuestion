import React, { Component } from 'react'

class RightPanel extends Component {
    render() {
        return(
            <div id={"rightPanelWrapper"}>
                <style jsx>{`
                  #rightPanelWrapper {
                    float: left;
                    width: 15%;
                    height: 1px;
                  }
                `}</style>
            </div>
        )
    }
}

export default RightPanel
