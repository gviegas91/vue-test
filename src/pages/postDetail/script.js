export default {
	data(){
		return {}
	},
	computed: {
		currentPost(){
			return this.$store.getters.currentPost;
		},
	},
	created(){
		this.$store.dispatch('getCurrentPost', this.$route.params.id);
	}
}