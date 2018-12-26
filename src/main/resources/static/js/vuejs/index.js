var app = new Vue({
  el: '#app',
  data: {
    searchName: "",
    searchNumber: "",
    listPoke: [],
    filteredPokeList: [],
  },
  computed: {
    filteredPokeListByName() {
      return this.listPoke.filter(poke => {
        if (isNaN(this.searchName)) {
          return poke.name.toLowerCase().includes(this.searchName.toLowerCase())
        } else {
          return poke.id.toLowerCase().includes(this.searchName.toLowerCase())
        }
      })
    }
  },
  methods: {
    getStarting: function() {
      var self = this;
      axios.get('/jsonFiles/seed.json')
        .then(function(response) {
          self.listPoke = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
    }
  },
  beforeMount() {
    this.getStarting()
  }
})