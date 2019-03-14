import Vue from 'vue';

export default{
	get(url, options) {
        return Vue.http.get(url, options)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }
}