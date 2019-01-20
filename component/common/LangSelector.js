import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (store) => (
    {
        // lang: store.lang.
    }
)
class LangSelector extends Component {

    constructor(props) {
        super(props)

        this.changeLanguage = this.changeLanguage.bind(this);
        this.changeLanguage.passive = true;
    }

    changeLanguage(lang) {
        console.log(lang)
    }

    render() {
        return(
            <div id={"langSelectField"}>

                <select onChange={(e) => this.changeLanguage(e.target.value)}>
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

export default connect(mapStateToProps)(LangSelector)