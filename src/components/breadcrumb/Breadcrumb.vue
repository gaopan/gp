<template>
  <section id="yxnr-breadcrumbs" v-if="$route.fullPath!='/'">
    <div class="container">
      <div class="row">
        <div id="yxnr-breadcrumb" class="col-sm-12 col-md-12">
          <div class="yxnr-column" v-if="items">
            <b-breadcrumb>
            	<b-breadcrumb-item v-for="item in items" :text="item.text" :active="item.active" :to="{path:item.href}"></b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./breadcrumb.js"></script>
<style src="./breadcrumb.scss" lang="scss" scoped></style>