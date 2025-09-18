import React from "react";
import "./MyTable.css";

export default class MyTable extends React.Component {
    state = {
        style:{
            border: '1px solid black',
            borderCollapse: 'collapse'
        }
    }
    render() {
        return <div>
            <table style={this.state.style}>
                <tbody>
                    <tr>
                        <td style={this.state.style}></td>
                        <td style={this.state.style}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}