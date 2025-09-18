import React from "react";
import MyTable from "./MyTable";
import "./App.css";

export default class App extends React.Component {
  render() {
    return <div>
      <MyTable data='utalom a ciganyokat'></MyTable>
    </div>
  }
}