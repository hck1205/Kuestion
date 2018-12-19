import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStudentBoard } from '../redux/actions/studentBoardActions'

const mapStateToProps = (store) => (
    {
        studentBoardList: store.studentBoard.boardList,
        studentBoardFetched: store.studentBoard.fetched
    }
)

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