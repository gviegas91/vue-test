import api from '../api/api.js';
import endpoints from '../api/endpoints.js';
const actions = {
	getPosts(context){
		return new Promise((resolve, reject) => {
			api.get(endpoints.posts).then(response => {
				context.commit('setPost', response.body);

				resolve(response);
			}, response => {
				reject(response);
			});
		});
	},
	getCurrentPost(context, id){
		return new Promise((resolve, reject) => {
			api.get(endpoints.currentPost + id).then(response => {
				context.commit('setCurrentPost', response.body);
				resolve(response);
			}, response => {
				reject(response);
			});
		});
	}
};

export default actions;