<template>
    <div id="messagepage">
      <h1 class="page-title">Messages</h1>
      <div id="nav" class="nav-links">
        <!-- Corrected paths to match the route definition -->
        <router-link to="/message/chat/1" class="nav-link">User 1</router-link> |
        <router-link to="/message/chat/2" class="nav-link">User 2</router-link> |
        <router-link to="/message/chat/3" class="nav-link">User 3</router-link> |
        <router-link to="/message/chat/4" class="nav-link">User 4</router-link>
      </div>
      <div id="content" class="content-section">
        <!-- Displays the child components for the selected route -->
        <router-view />
      </div>
    </div>
  </template>