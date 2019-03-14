<template>
	<section class="detail-post">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<template v-if="currentPost">
						<article class="post-item">
							<h1 class="title">{{ currentPost.title }}</h1>
							<ul class="pre-info">
								<li>Destination Europe</li>
								<li>Added by <span>John Williams Doe</span></li>
								<li>January 01, 2018</li>
							</ul>
							<div class="image-box">
								<img src="../../assets/post-image.png" alt="">
							</div>
							<p class="description">{{ currentPost.body }}</p>
						</article>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>
<script src="./script.js"></script>
<style src="./style.scss" lang="scss"></style>