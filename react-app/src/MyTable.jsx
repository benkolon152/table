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

    handelDelClick = function(rowIdx) {
        const oldRows = this.state.rows.slice()
        const newRows = [...oldRows]
        newRows.splice(rowIdx, 1)
        this.setState({rows: [...newRows]})
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
                        <td>
                            <button onClick={() => this.handelDelClick(wordIdx)}>del row</button>
                        </td>
                        {[...word].map((char, charIdx) => <td key={charIdx} style={this.state.style.td}>
                            {char == '_' ? ' ': char}
                            </td>)}
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