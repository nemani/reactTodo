import React, { Component } from "react";
import { TodoListContainer } from "./TodoList";
import logo from "./logo.svg";
import "./App.css";
import "./GithubRibbon.css";

class App extends Component {
	render() {
		return (
			<div style={{ position: "relative" }}>
				<div className="App container">
					<center className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h3 className="App-title">React TODO List</h3>
					</center>
					<div className="list-container">
						<TodoListContainer />
					</div>
				</div>
				<center id="footer">
					<a
						target="_black"
						href="http://nemaniarjun.github.io/"
						style={{ color: "inherit", textDecoration: "none" }}
					>
						Made with{" "}
						<svg className="icon icon-coffee">
							<use xlinkHref="#icon-coffee" />
						</svg>{" "}
						&{" "}
						<svg className="icon icon-heart">
							<use xlinkHref="#icon-heart" />
						</svg>{" "}
						by Arjun Nemani
					</a>
				</center>
			</div>
		);
	}
}

export default App;
