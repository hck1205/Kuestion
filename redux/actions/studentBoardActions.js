import API from "../API"

export function fetchStudentBoard() {
    return function(dispatch) {
        API("/student/getAll")
            .then((response) => {
                console.log(response)
            })
    }

}