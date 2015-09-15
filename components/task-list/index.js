import { connect } from 'react-redux';
import React, { Component } from 'react';
import Task from '../task';

const ConnectedTask = connect()(Task);

export default class TaskList extends Component {
  render() {
    const { taskList = [] } = this.props;
    const tasks = taskList.map(task => <ConnectedTask key={ task.taskId } { ...task } />);

    return <ul>{ tasks }</ul>;
  }
}