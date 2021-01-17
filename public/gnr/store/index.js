import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		shows: [],
		filteredShows: [],
	},
	mutations: {
		setShows(state, shows) {
			state.shows = [];
			shows.forEach(show => state.shows.push(show));
		},
		setFilteredShows(state, shows) {
			state.filteredShows = [];
			if (shows.length && shows[0].name !== 'No Results Found!')
				shows.forEach(show => state.filteredShows.push(show));
			else if (shows.length && shows[0].name === 'No Results Found!') {
				state.filteredShows.push({ id: '', date: '', name: shows[0].name });
			}
		},
	},
	actions: {
		async getShows(context) {
			const { data } = await axios.get('http://10.0.0.49:3423/show/getallshows');
			context.commit('setShows', data.success);
		},
		setFilteredShows(context, shows) {
			context.commit('setFilteredShows', shows);
		},
	},
	getters: {
		shows: state => state.shows,
		filteredShows: state => state.filteredShows,
	},
});
