import React from 'redux';

const TodoItem = ({task}) => {
    return <div>{task.task} </div>;
};

export default TodoItem;