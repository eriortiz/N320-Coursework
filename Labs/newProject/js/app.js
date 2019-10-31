var app = new Vue({
  el: '#app',
  mounted: function() {
    fetch('data/people.json').then(data => {
      console.log(data);
    });
  },
  data: {},
  methods: {}
});
