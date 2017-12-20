import React, { Component } from "react";

export class TodoAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = { text: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ text: event.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.text) {
			this.props.add(this.state.text);
			this.setState({ text: "" });
		}
	}
	render() {
		return (
			<p>
				<form>
					<label className="new-task">Add Item</label>
					<input
						className="new-task"
						onChange={this.handleChange}
						value={this.state.text}
						type="text"
					/>
					<button onClick={this.handleSubmit}>Add</button>
				</form>
			</p>
		);
	}
}
