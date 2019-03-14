<template>
	<header class="header">
		<div class="container">
			<div class="row">
				<div class="col-6 col-md-3 col-lg-4">
					<div class="left-content">
						<div class="logo">
							<router-link to="/home">
								<img src="../../assets/logo.png" alt="Blog 365">
							</router-link>
						</div>

						<ul class="social-links">
							<li class="social-item">
								<a href="">
									<font-awesome-icon :icon="['fab', 'medium']" />
								</a>
							</li>
							<li class="social-item">
								<a href="">
									<font-awesome-icon :icon="['fab', 'facebook']" />
								</a>
							</li>
							<li class="social-item">
								<a href="">
									<font-awesome-icon :icon="['fab', 'twitter']" />
								</a>
							</li>
							<li class="social-item">
								<a href="">
									<font-awesome-icon :icon="['fab', 'instagram']" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-6 col-md-9 col-lg-8">
					<div class="right-content">
						<button type="button" class="toggle-button" v-on:click="toggleMenu()">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>

						<nav :class="{'nav-menu': true, 'show-menu': showMenu}">
							<ul>
								<li class="menu-item">
									<a href="">Travel Updates</a>
								</li>
								<li class="menu-item">
									<a href="">Reviews</a>
								</li>
								<li class="menu-item">
									<a href="">About</a>
								</li>
								<li class="menu-item">
									<a href="">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script src="./script.js"></script>
<style src="./style.scss" lang="scss"></style>