import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import styled from 'styled-components';

class Counter extends Component {
    incremet = () => {
        this.props.dispatch({type: types.INCREMENT})
        this.props.dispatch({type: types.REQUEST_DATA})
    }

    decrement = () => {
        this.props.dispatch({type: types.DECREMENT})
    }

    render() {
        return (
            <Container>
                <h2>Counter</h2>
                <div>
                    <WrapedButton onClick={this.decrement}>&ndash;</WrapedButton>
                    <span>{this.props.count}</span>
                    <WrapedButton onClick={this.incremet}>+</WrapedButton>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
}

export default connect(mapStateToProps)(Counter);

const WrapedButton = styled.button `
    margin: 20px;
`;

const Container = styled.div `
    border: 1px solid;
`;