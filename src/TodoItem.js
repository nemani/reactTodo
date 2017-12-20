import React, { Component } from "react";

export class TodoItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", checked: false };
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    this.setState({
      id: this.props.el.id,
      text: this.props.el.text
    });
  }

  toggle() {
    console.log("handleClick");
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <TodoItem
        id={this.state.id}
        text={this.state.text}
        checked={this.state.checked}
        del={this.props.del}
        toggle={this.toggle}
      />
    );
  }
}

export class TodoItem extends Component {
  render() {
    return (
      <li>
        <div onClick={this.props.toggle}>
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.checked && "checked"}
          />
          <div className={"label" + (this.props.checked?" done":"")}>{this.props.text}</div>
        </div>
        <div onClick={() => this.props.del(this.props.id)} className="delete">
          Remove
        </div>
      </li>
    );
  }
}
