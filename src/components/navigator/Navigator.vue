<template>
  <header :class="{short: isShort}" ref="header">
    <b-navbar ref="navbar" toggleable="lg" type="light" class="navbar-yxnr" v-bind:class="{sticky: isSticky}">
      <div class="container">
        <b-navbar-brand>
          <img src="../../assets/images/yxnr-logo.png" width="120" height="60" class="d-inline-block align-top" alt="优秀男人" />
        </b-navbar-brand>
        <b-navbar-toggle target="navbarYxnrDropdown" />
        <b-collapse is-nav class="text-right" id="navbarYxnrDropdown">
          <!-- Start Menu -->
          <b-navbar-nav>
            <b-nav-item v-for="menu in menus" @click="navTo(menu)" href="javascript:void(0)" :active="isCurrent(menu)">{{menu.text}}</b-nav-item>
          </b-navbar-nav>
          <!-- End Menu -->
        </b-collapse>
      </div>
    </b-navbar>
    <div class="scroll-down" @click="scrollOnePage"></div>
  </header>
</template>
<script src="./navigator.js"></script>
<style src="./navigator.scss" scoped lang="scss"></style>