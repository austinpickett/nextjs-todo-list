import React, { Component } from 'react'
import Item from './item'

export default class extends Component {
	constructor(props) {
		super(props)

		this.state = {
			todo_list: [
				{ title: 'lorem ipsum dolor sit amit', complete: false },
				{ title: 'Do Laundry', complete: false },
				{ title: 'Do Dishes', complete: false }
			]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const newItem = {
      title: document.getElementById('todo-title').value,
      complete: false
    }

    const todo_list = this.state.todo_list
    todo_list.push(newItem)

    this.setState({ todo_list })
  }

	render() {
    console.log(this.state.todo_list)

		return (
			<div>
				<input type="text" placeholder="Add item" id="todo-title"/>
				<input type="submit" onClick={this.handleClick} />

				<div className="list">{this.state.todo_list.map(x => <Item title={x.title} complete={x.complete} key={Math.random()}/>)}</div>
			</div>
		);
	}
}
