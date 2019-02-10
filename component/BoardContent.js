import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (store) => (
    {
    }
)
class BoardContent extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return(
            <div id={"boardTitleWrapper"}>
                TEST
                <style jsx>{`
                  #boardTitleWrapper {
                    border: 1px solid #efefef;
                    background-color: #fff;
                    border-radius: 4px;
                    border-bottom: 1px solid #e2e2e2;
                    margin-bottom: 8px;
                    padding: 16px;
                    padding-top: 16px;
                  }
                `}</style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(BoardContent)