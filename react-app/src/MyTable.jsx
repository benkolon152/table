import React from "react";
import "./MyTable.css";

export default class MyTable extends React.Component {
    state = {
        style:{
            table:
                {
                    border: '1px solid black',
                    borderCollapse: 'collapse'
                },
                td:
                {
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                    width: '80px',
                    height: '80px'
                }
        },
        rows: []
    }
    render() {
        return <div>
            <table style={this.state.style.table}>
                <tbody>
                    {/* <tr>
                        <td style={this.state.style.td}></td>
                        <td style={this.state.style.td}></td>
                    </tr>*/}

                    {this.state.rows.map((word, wordIdx)=> <tr key={wordIdx} >
                        <td style={this.state.style.td}>{word}</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    }
    componentDidMount(){
        const words = this.props.data.split(" ")
        console.log('words', words)
        this.setState({rows: words})
    }
}