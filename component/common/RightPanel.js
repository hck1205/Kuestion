import React, { Component } from 'react'

class RightPanel extends Component {
    render() {
        return(
            <div id={"rightPanelWrapper"}>
                <style jsx>{`
                  #rightPanelWrapper {
                    float: left;
                    min-width: 300px;
                    height: 1px;
                  }
                `}</style>
            </div>
        )
    }
}

export default RightPanel