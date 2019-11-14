import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}
/**
* The onClick function must pass through a function that returns the removeCharacter() method,
otherwise it will try to run automatically.
*/
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component{
    render(){
        const { characterData, removeCharacter } = this.props //used to access to the data
        return(
            <table>
                <TableHeader />
                <TableBody
                    characterData = {characterData}
                    removeCharacter = {removeCharacter}
                />
            </table>
        )
    }
}

export default Table