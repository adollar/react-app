import React, {Component} from 'react';
import {Statistic} from 'semantic-ui-react'

export class Counter extends Component
{
    render() {
        return (
            <Statistic color="teal" size="small">
                <Statistic.Value>5,550</Statistic.Value>
            </Statistic>
        );
    }
}