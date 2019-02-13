import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (store) => (
  {
    // lang: store.lang.
  }
)
class Join extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <div id={"joinWrapper"}>
        join page
        <style jsx>{`
                  #joinWrapper {
                    float: left;
                    width: 220px;
                    min-height: 700px;
                  }
                `}</style>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Join)