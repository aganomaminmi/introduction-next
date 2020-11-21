import React, { Component } from 'react';
import firebase from "firebase";
import 'firebase/storage';

class FireAdd extends Component {
    style = {
        fontSize: '12pt',
        padding: '5px 10px'
    }

    constructor(props) {
        super(props);
        this.state = {
            name_str: '',
            msg_str: '',
            lastID: -1,
            data: []
        }
        this.getLastId = this.getLastId.bind(this);
        this.doChangeName = this.doChangeName.bind(this);
        this.doChangeMsg = this.doChangeMsg.bind(this);
        this.doAction = this.doAction.bind(this);

    }

    doChangeName(e) {
        this.setState({
            name_str: e.target.value
        })
    }

    doChangeMsg(e) {
        this.setState({
            msg_str: e.target.value
        })
    }


    doAction(e) {
        this.addFireData(this.state.input);
        this.setState({
            name_str: '',
            msg_str: '',
        })
        this.getLastId();
    }

    addFireData(s) {
        if (Number(this.state.lastID) === -1) {
            return;
        }
        let id = Number(this.state.lastID) + 1;
        let db = firebase.database();
        let ref = db.ref('sample/' + id);
        ref.set({
            ID: id,
            message: this.state.msg_str,
            name: this.state.name_str,
        });
    }

    getLastId() {
        let db = firebase.database();
        let ref = db.ref('sample/');
        ref.orderByKey()
            .limitToLast(1)
            .on( 'value', snapshot => {
                let response = snapshot.val();
                for (let i in response) {
                    this.setState({
                        lastID: i
                    })
                }
            })
    }



    render() {
        if (Number(this.state.lastID) === -1) {
            this.getLastId();
            return <p>Please wait...</p>;
        }
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th className="label">name</th>
                            <td>
                                <input
                                    type="text"
                                    placeholder="your name."
                                    onChange={this.doChangeName}
                                    value={this.state.name_str}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className="label">
                                message
                            </th>
                            <td>
                                <input
                                    type="text"
                                    placeholder="type message..."
                                    onChange={this.doChangeMsg}
                                    value={this.state.msg_str}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                <button onClick={this.doAction}>
                                    Add
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default FireAdd;
