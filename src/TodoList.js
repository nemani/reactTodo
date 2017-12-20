import React, { Component } from "react";
import { TodoItemContainer } from "./TodoItem";
import { TodoAddForm } from "./TodoAddForm";

export class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.id = 0;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(text) {
    var newElement = { text: text, id: this.id++ };
    this.setState({ list: this.state.list.concat(newElement) });
    this.id++;
  }

  handleDelete(id) {
    var newList = this.state.list.filter(el => el.id !== id);
    console.log(newList);
    this.setState({ list: newList });
  }
  render() {
    return (
      <div>
        <TodoAddForm add={this.handleAdd} />
        <TodoList list={this.state.list} del={this.handleDelete} />
      </div>
    );
  }
}

export class TodoList extends Component {
  render() {
    var list = this.props.list.map(el => {
      return <TodoItemContainer key={el.id} del={this.props.del} el={el} />;
    });
    return <ul id="incomplete-tasks">{list}</ul>;
  }
}
