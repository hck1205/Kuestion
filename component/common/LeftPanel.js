import React, { Component } from 'react'

class LeftPanel extends Component {
    render() {
        return(
            <div id={"leftPanelWrapper"}>

                <style jsx>{`
                  #leftPanelWrapper {
                    float: left;
                    min-width: 440px;
                    height: 1px;
                  }
                `}</style>
            </div>
        )
    }
}

export default LeftPanel