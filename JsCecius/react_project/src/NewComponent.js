import React, { Component } from 'react';

class NewComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            name: 'Claudiu'
        }
    }

    render() {
        const {name} = this.state;

        return (
            <div>React new component, written by  {name}</div>         
        );
    }
}

export default NewComponent;