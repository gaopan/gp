<template>
  <section class="yxnr-main-body view-article">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div class="yxnr-column">
            <article class="item item-page" itemscope="" itemtype="http://schema.org/Article">
              <meta itemprop="inLanguage" content="en-GB">
              <div class="entry-header">
                <h2 itemprop="name">
                  {{post.title}} </h2>
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
              <div class="entry-image full-image"> <img :src="(post.images&&post.images.length>0)?imgUrl(post.images[0]):''" alt="" itemprop="image"> </div>
              <div itemprop="articleBody" v-html="post.content">
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./post.js"></script>