import React, {Component} from 'react';
import {Statistic} from 'semantic-ui-react'

export class HeaderCounter extends Component
{
    render() {
        return (
            <Statistic color="red" size="tiny">
                <Statistic.Value>5,550</Statistic.Value>
            </Statistic>
        );
    }
}
