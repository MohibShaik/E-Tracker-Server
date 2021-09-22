const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Task = db.task;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { task } = require("../models");
const { response } = require("express");

// to save a new task
exports.createTask = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Task should have a title",
    });
    return;
  }

  const task = {
    task_title: req.body.title,
    task_description: req.body.description,
    task_category_id: req.body.categoryId,
    task_category: req.body.categoryName,
    task_due_date: req.body.dueDate,
    task_priority: req.body.priority ? req.body.priority : "low",
    created_user_uid: req.body.userId,
    is_active: req.body.status ? req.body.status : "true",
  };

  Task.create(task)
    .then((data) => {
      res.status(200).send({
        message: "task created successfully",
        data: data
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something went wrong",
      });
    });
};

//get tasksList by userId 
exports.getTaskListByUserId = (req, res) => {
  Task.findAll({ where: { created_user_uid: req.params.userId } }).then((data) => {
    res.status(200).send({
      message: "success",
      data: data,
    });

  }).catch((err) => {
    res.status(500).send({
      message: err.message || "something went wrong",
    });
  });
}

// find all tasks
exports.findAllTasks = (res, req) => {
  Task
    .findAll()
    .then((data) => {
      res.status(200).send({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something went wrong",
      });
    });
};

exports.updateTask = (req, res) => {
  const TaskId = req.params.taskId;
  Task.update(req.body, {
    where: {
      task_uid: TaskId
    }
  }).then((data) => {
    if (data == 1) {
      res.send({
        message: "Task was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Task with id=${TaskId}. Maybe Task was not found or req.body is empty!`
      });
    }
  }).catch((err) => {
    res.status(500).send({
      message: err.message || "something went wrong",
    });
  });


};

// to find a task by id
exports.findTaskById = (req, res) => {
  const TaskId = req.params.taskId;
  Task.findByPk(TaskId).then((data) => {
    if (data === 1) {
      res.status(200).send({
        message: 'success',
        data: data
      })
    }

    else {
      res.status(404).send({
        message: 'No task found with the given id',
      })
    }
  }).catch((error) => {
    res.status(404).send({
      message: 'No task found with the given id '
    })
  })
};

// to delete a task
exports.deleteTaskById = (req, res) => {
  const TaskId = req.params.taskId;
  Task.destroy({
    where: {
      task_uid: TaskId
    }
  }).then(response => {
    if (response === 1) {
      res.status(200).send({
        message: 'Task deleted successfully'
      })
    }
    else {
      res.status(400).send({
        message: 'No task found with the given id'
      })
    }
  }).catch(error => {
    res.status(500).send(error)
  })
};
