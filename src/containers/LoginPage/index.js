import React from "react"
import styled from "styled-components"

const SelectCityPageWrapper = styled.form`

`

class SelectCityPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    
    render() {
        const { classes } = this.props;

        return (
            <SelectCityPageWrapper onSubmit={this.handleSubmit}>
                Login page
            </SelectCityPageWrapper>
        )
    }
}

export default SelectCityPage;


