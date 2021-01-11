import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        "Buy shopping", "Clean bathroom", "Car's MOT"
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        this.todos.push(this.newTask);
        this.newTask = "";
      }
    }
  });
});
