import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => this.setState({monsters: monsters}));
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
      searchField: e.target.value
    })
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={this.handleChange} ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
