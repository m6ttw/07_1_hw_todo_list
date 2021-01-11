import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        "Wash the dishes", "Hoover the floor", "Take the bins out"
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    }
  });
});
