import React, {Component} from 'react';
import {Statistic} from 'semantic-ui-react'

export class Counter extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            cntrValue: this.props.cntr.startValue,
            step: this.props.cntr.step 
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => {
                this.tick()
            }, 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            cntrValue: this.state.cntrValue + this.state.step
        })
    }

    render() {
        return (
            <Statistic color={this.props.cntr.color} size={this.props.cntr.size ? this.props.cntr.size: 'tiny'}>
                <Statistic.Value>{this.state.cntrValue}</Statistic.Value>
            </Statistic>
        );
    }
}