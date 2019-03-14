const mutations = {
	setPost(state, data){
		state.posts = data;
    },
    setCurrentPost(state, data){
		state.currentPost = data;
    }
};

export default mutations;