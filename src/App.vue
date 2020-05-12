<template>
  <div class="container" id="app">
    <navbar></navbar>
    <notes :notesList="list"></notes>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Notes from './components/Notes.vue';
export default {
  components: {
    navbar: Navbar,
    notes: Notes
  },
  data() {
    return { user: {name: '', password: ''}, list: [] };
  },

  methods: {
    // loadNotes(event) {
    //   this.user = event;
    //   this.list = [];
    //   this.$http.get('users/' + this.user.name + '/notes.json')
    //       .then( response => response.json() )
    //       .then(
    //         data => {
    //           for(let i in data) {
    //             if(data[i])
    //               this.list.push(data[i]);
    //           }
    //       });
    // }
  }

}
</script>

<style>
</style>
