Vue.component('student-card', {
  props: ['student', 'isactive'],
  template:
    "<div class='student' v-bind:class='{ cardActive:isactive }' draggable=\"true\">{{ student.name }} : {{ student.skill }}</div>"
});

var app = new Vue({
  el: '#app',
  data: {
    Student: [
      { name: 'Sienna', skill: 2, joy: 0 },
      { name: 'Cyan', skill: 0, joy: 5 },
      { name: 'Magenta', skill: 3, joy: 3 }
    ],
    currentstudent: { name: 'Sienna', skill: 2, joy: 0 },
    curStudentId: 0
  },
  methods: {
    arrowClicked: function() {
      this.curStudentId += 1;
      this.currentstudent = this.Student[this.curStudentId];
      this.cardactive = !this.cardactive;
    }
  }
});
