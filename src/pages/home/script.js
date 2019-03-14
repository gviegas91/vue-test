export default {
	data(){
		return {
			//pagination
			perpage: 5,
			currentPageIndex: 0
		}
	},
	methods: {
		limitBy(array) {
			return array.slice(0, this.perpage);
		},
		offsetFilter(array){
			return array.slice(this.offset, array.length)
		},
		setPage(index) {
			if (index >= 0 && index < this.pages) {
				this.currentPageIndex = index;
			}
		}
	},
	computed: {
		offset(){
			return this.currentPageIndex * this.perpage;
		},
		pages(){
			return Math.ceil(this.posts.length / this.perpage);
		},
		posts(){
			return this.$store.getters.posts;
		},
	},
	created(){
		this.$store.dispatch('getPosts');
	}
}