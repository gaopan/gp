<template>
  <section class="yxnr-main-body view-article-list">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div class="yxnr-column">
            <div class="blog" itemscope="" itemtype="http://schema.org/Blog">
              <div class="items-row row clearfix" :class="'row-' + index" v-for="(post, index) in posts">
                <div class="col-sm-12">
                  <article class="item column-1" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
                    <div class="row">
                      <div class="entry-img-wrapper col-sm-6">
                        <div class="entry-image intro-image">
                          <a href="javascript:void(0)" @click="toViewPost(post)">
                            <img :src="post.images.length>0?imgUrl(post.images[0]):''" alt="" itemprop="thumbnailUrl">
                          </a>
                        </div>
                      </div>
                      <div class="entry-info-wrapper col-sm-6">
                        <div class="entry-header">
                          <h2 itemprop="name">
                            <a href="javascript:void(0)" @click="toViewPost(post)" itemprop="url">
                              {{post.title}}</a>
                          </h2>
                          <dl class="article-info">
                            <dt class="article-info-term"></dt>
                            <dd class="published">
                              <fa-icon :icon="['far', 'clock']"></fa-icon>
                              <time datetime="2019-03-27T16:35:17+00:00" itemprop="datePublished" data-toggle="tooltip" title="" data-original-title="Published Date">
                                {{post.publishTime | moment("YYYY 年 MM 月 DD 日")}}</time>
                            </dd>
                            <dd class="favorite">
                              <fa-icon :icon="['far', 'thumbs-up']"></fa-icon>
                              <meta itemprop="likeCount" content="LikeCount:125">
                              {{post.likeCount}}
                            </dd>
                            </dd>
                            <dd class="hits">
                              <fa-icon :icon="['fas', 'eye']"></fa-icon>
                              <meta itemprop="interactionCount" content="UserPageVisits:381">
                              {{post.viewCount}}
                            </dd>
                          </dl>
                        </div>
                        <p v-html="post.content"></p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div class="pagination-wrapper">
                <div>
                  <ul class="pagination">
                    <li :class="{disabled:pagination.currentPage<2}"><a :title="pagination.currentPage<2?null:'上一页'" class="" :href="pagination.currentPage<2?null:'javascript:void(0)'" @click="prePage">
                        <fa-icon :icon="['fas', 'chevron-left']"></fa-icon>
                      </a></li>
                    <li class="hidden-xs" v-for="index in pagination.pageCount" :class="{active: pagination.currentPage==index}">
                      <a :title="pagination.currentPage==index?null:index" :href="pagination.currentPage==index?null:'javascript:void(0)'" @click="gotoPage(index)">{{index}}</a>
                    </li>
                    <li :class="{disabled:pagination.currentPage>pagination.pageCount-1}"><a :title="pagination.currentPage>pagination.pageCount-1?null:'上一页'" class="" :href="pagination.currentPage>pagination.pageCount-1?null:'javascript:void(0)'" @click="nextPage">
                        <fa-icon :icon="['fas', 'chevron-right']"></fa-icon>
                      </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./life.js"></script>
<style src="./life.scss" lang="scss" scoped></style>