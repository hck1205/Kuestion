import React, { Component } from 'react'

class ModalOverlay extends Component {
    render() {
        return(
            <div id={"modelOverlay"}>

                <style jsx>{`
                  #modelOverlay {
                    background-color: black;
                    width: 100%;
                    height: 100%;
                  }
                `}</style>
            </div>
        )
    }
}

export default ModalOverlay