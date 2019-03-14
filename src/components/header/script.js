export default {
	data(){
		return {
			showMenu: true
		}
	},
	methods: {
		toggleMenu() {
			if(this.showMenu == true){
				this.showMenu = false;
			}else if(this.showMenu == false) {
				this.showMenu = true;
			}
		}
	}
}