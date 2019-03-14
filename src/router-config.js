// PAGES
import Home from './pages/home/Home.vue';
import PostDetail from './pages/postDetail/PostDetail.vue';

export const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/home',
		component: Home
	},
	{
		name: 'detail', 
		path: '/postdetail/:id',
		component: PostDetail
	}
];