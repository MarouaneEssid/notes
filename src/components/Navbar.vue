<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <a class="navbar-brand">Notes</a>
      <form class="form-inline">
        <input class="form-control col-4 mr-sm-2" type="text" placeholder="username">
        <input class="form-control col-4 mr-sm-2" type="password" placeholder="password">
      </form>
      <ul class="navbar-nav">
          <li class="navbar-item">
            <a href="/user" class="nav-link">user</a>
          </li>
          <li class="navbar-item">
            <a href="/disconnect" class="nav-link">disconnect</a>
          </li>
        </ul>
      </nav>
</template>

<script>
  export default {
    
  }
</script>
