<template>
	<section class="posts-list">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<template v-for="(post, index) in limitBy(offsetFilter(posts))">
						<article class="post-item">
							<h1 class="title">{{ post.title }}</h1>
							<ul class="pre-info">
								<li>Destination Europe</li>
								<li>Added by <span>John Williams Doe</span></li>
								<li>January 01, 2018</li>
							</ul>
							<div class="image-box">
								<img src="../../assets/post-image.png" alt="">
							</div>
							<p class="description">{{ post.body }}</p>
							<router-link :to="{ name: 'detail', params: { id: post.id }}" class="read-more">Read More</router-link>
						</article>
					</template>
					<div class="pagination">
						<div class="previous" @click="setPage(currentPageIndex - 1)">previous</div>
						<div class="next" @click="setPage(currentPageIndex + 1)">next</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script src="./script.js"></script>
<style src="./style.scss" lang="scss"></style>