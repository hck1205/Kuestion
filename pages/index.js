import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStudentBoard } from '../redux/actions/studentBoardAction'

const mapStateToProps = state => ({

})

class Index extends Component {

    componentWillMount() {
        fetchStudentBoard()
    }

    render() {
        return(
            <div>test</div>
        )
    }
}

export default connect(mapStateToProps)(Index)