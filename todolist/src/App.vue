<template>
  <div id="app">
    <h1>What do you need to do?</h1>
    <input v-model='newOne' v-on:keyup.enter='addNewOne' type="text" name="" />
    <ol>
      <li v-for='item in list' v-bind:class='{ finished: item.isFinished}' v-on:click='toggleState(item)'> {{ item.text }} </li>
    </ol>
    <button v-on:click='clearAll'>clear</button>
  </div>
</template>

<script>
import Store from './store'
export default {

  data () {
    return {
      list: Store.fetch(),
      newOne: ''
    }
  },
  watch: {
    list : function(val) {
        Store.save(val)
    }
  },
  methods: {
    addNewOne () {
      if(this.newOne){
        this.list.push({
          text: this.newOne,
          isFinished: false
        })
        this.newOne = ''
      }
    },
    toggleState (item) {
      item.isFinished = !item.isFinished
      Store.save(this.list)
    },
    clearAll () {
      this.list = []
      Store.save([])
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ol {
  margin: 30px 500px;
}

.finished {
  text-decoration: underline;
}

</style>
