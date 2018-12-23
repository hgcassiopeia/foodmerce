import React, { Component } from 'react';
import { create } from 'domain';

class Footer extends Component{

    constructor(props){
        super(props)
    }

    render(){

        const {creator} = this.props

        return(
            <p>Footer {creator}</p>
        )
    }
}

export default Footer