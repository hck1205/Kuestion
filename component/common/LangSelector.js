import React, { Component } from 'react'

class LangSelectField extends Component {
    render() {
        return(
            <div id={"langSelectField"}>
                <select>
                    <option value="EN">ENGLISH</option>
                    <option value="KO">KOREAN</option>
                </select>
                <style jsx>{`
                  #langSelectField {

                  }
                `}</style>
            </div>
        )
    }
}

export default LangSelectField