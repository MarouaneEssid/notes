<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <a class="navbar-brand">Notes</a>
      <form @submit.prevent="login()" class="form-inline col-8">

        <input class="form-control mr-md-1" 
               type="text" 
               placeholder="username"
               minlength="4"
               v-model.lazy="user.name">

        <input class="form-control"
               type="password"
               placeholder="password"
               minlength="4"
               v-model.lazy="user.password">
               
        <button class="btn btn-success mx-sm-2">connect</button>
      </form>
      <ul class="navbar-nav">
          <li class="navbar-item">
            <a href="/user" class="nav-link">{{ user.name }}</a>
          </li>
      </ul>
      </nav>
</template>

<script>
  export default {
    data() {
      return { user: {name: '', password: ''},
               loggedUser: {name: '', success: false },
               userData: null,
      }
    },

    methods: {
      signin(name, password) {
        let success = false;
        this.$http.post('users/' + name + '.json', { 'password': password })
          .then(response => success = response.status === 200);
        return success
      },
      login() {
        this.$http.get('users/jive.json')
          .then( response => {this.userData = response.data; console.log(response.data);} )
        console.log("hello", this.userData);
        // if(userData) {
        //   if(userData.password === this.user.password) {
        //     this.loggedUser.name = this.user.name;
        //     this.loggedUser.success = true;
        //     console.log('login success'); } 
        //   else {
        //     this.loggedUser.success = false;
        //     console.log('login denied');}
        // }else {
        //   this.loggedUser.success = this.signin(this.user.name, this.user.password);
        //   this.loggedUser.name = this.user.name;
        //   if (this.loggedUser.success) console.log('signin success');
        // }
        
      }
    },
  }
</script>
