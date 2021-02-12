<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TP3</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!-- <router-link> con esto agrego las views (forma estatica) -->
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/top"
                >Top 10 lenguajes</router-link
              >
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
/* TAREA: evitar colision con bootstrap sin usar el important */
/* para evitar el !important el elemento que sea mas especifico gana (osea mientras mas especifico mejor) */
nav a.router-link-exact-active {
  color: #42b983 !important;
}
</style>