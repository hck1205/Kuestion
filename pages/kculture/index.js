import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '../../component/common/Head'


const mapStateToProps = (store) => (
    {
    }
)

class Index extends Component {
    render() {
        return(
            <div id={ 'kpopMain' }>
                <Head title="K-POP 페이지" description="KPOP" />
                <style jsx>{`
                  #kpopMain {
                    background-color: black;
                    width: 500px;
                    height: 500px;
                  }
                `}</style>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Index)