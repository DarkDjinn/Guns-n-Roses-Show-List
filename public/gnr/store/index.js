import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from '../config';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		shows: [],
		filteredShows: [],
		searchTerm: '',
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
		setSearchTerm(state, searchTerm) {
			state.searchTerm = searchTerm;
		},
	},
	actions: {
		async setShows(context, sortBy) {
			const { data } = await axios.get(
				`${config.API_URL}/gnr/show/getshows${
					sortBy && sortBy.name ? `?sort=${sortBy.name}&direction=${sortBy.direction}` : ''
				}`
			);
			context.commit('setShows', data.success);
		},
		setFilteredShows(context, shows) {
			context.commit('setFilteredShows', shows);
		},
		setSearchTerm(context, searchTerm) {
			context.commit('setSearchTerm', searchTerm);
		},
	},
	getters: {
		shows: state => state.shows,
		filteredShows: state => state.filteredShows,
		searchTerm: state => state.searchTerm,
	},
});
