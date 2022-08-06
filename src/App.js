import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  list-style: none;
  font-size: 10px;
}
h1{
  font-size: 40px;
}

body{
  width: 100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: url("https://ourimagehosting.com/images/2022/08/05/0157245e0edd3aa80121651837a64c.jpg2o6f00923619214001.jpg");
  color: indigo;
  font-size: 20px;
}
`;
const Title = styled.h1`
   font-family: "Times New Roman", Times, serif;
   text-shadow: 2px 2px #ff0000;
`;
const Criar = styled.button`
  width: 50px;
  height: 20px;
  margin-left: 4vw;
  background-color: indigo;
  border-color: orangered;
  border-radius: 5px;
  color:white;
  :hover {
    cursor: pointer;
    color: red;
    border-bottom-color: blueviolet;
  }
`;
const Lista = styled.ul`
  width: 80vw;
  height: 78vh;
  margin-top: 5vh;
  padding-top: 3vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: white;
  border-radius: 5%;
`;
const Tarefa = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  text-align: start;
  margin-left: 2vw;
  margin-right: 2vw;
  border-bottom: dashed 1px;
  border-bottom-color: gray;
`;
const Icon = styled.button`
  width: 20px;
  height: 20px;
  margin-left:10px;
  text-align: center;
  align-items:center;
  border: 1px solid transparent;
  border-radius: 25%;
  background-color: #f72585;
  cursor: pointer;
`;

export default class toDo extends React.Component {
  state = {
    task: "",
    taskList: []
  };
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  add = () => {
    let { task } = this.state;
    if (task.length > 0 && task.substring(0, 1) !== " ") {
      this.setState({
        task: "",
        taskList: this.state.taskList.concat({
          task: task,
          id: Date.now()
        })
      });
    }
  };
  remove = (id) => {
    let { taskList } = this.state;
    this.setState({
      taskList: taskList.filter((item) => {
        return item.id !== id;
      })
    });
  };
  render() {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <GlobalStyle />
        <Title>To Do</Title>
        <input onChange={this.handleChange} value={this.state.task} />
        <Criar onClick={this.add}>ADD</Criar>
        <Lista>
          {this.state.taskList.map((item) => (
            <Tarefa>
              {item.task}
              <Icon onClick={() => this.remove(item.id)}> X </Icon>
            </Tarefa>
          ))}
        </Lista>
      </form>
    );
  }
}
