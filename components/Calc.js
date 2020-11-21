import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterCalc } from "../store";

class Calc extends Component {
    style = {
        fontSize: '12pt',
        padding: '5px 10px'
    }

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.doAction = this.doAction.bind(this);
        this.reset = this.reset.bind(this);
    }

    onChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    onKeyPress(e) {
        if (event.keyCode === 13) {
            this.doAction(e);
        }
    }

    doAction(e) {
        this.props.dispatch(enterCalc(this.state.input));

        return this.setState({
            input: ''
        });
    }

    reset(e) {
        this.props.dispatch({
            type: 'RESET'
        });

        return this.setState({
            input: ''
        });
    }

    render() {
        let result = [];
        this.props.data.forEach( (value, index) => {
            result.push(
                <tr key={index}>
                    <th>{value}</th>
                    <td>{this.props.number[index]}</td>
                </tr>
            );
        })

        return (
            <div>
                <p>TOTAL: {this.props.result}</p>
                <input
                    type="text"
                    style={this.style}
                    size="40"
                    value={this.state.input}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                />
                <button
                    style={this.style}
                    onClick={this.doAction}
                >
                    Enter
                </button>
                <button
                    style={this.style}
                    onClick={this.reset}
                >
                    Reset
                </button>
                <hr />
                <table>
                    <tbody>{result}</tbody>
                </table>
                <p>{this.props.message}</p>
            </div>
        );
    }

}

export default connect( state => state )(Calc);
