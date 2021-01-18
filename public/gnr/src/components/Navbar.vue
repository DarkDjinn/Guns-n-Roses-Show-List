<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">🔫 GnR Vault 🌹</a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
				<Search />
			</div>
		</div>
	</nav>
</template>

<script>
import Search from './Search.vue';
export default {
	name: 'Navbar',
	components: {
		Search,
	},
	data() {
		return {
			searchTerm: '',
		};
	},
	methods: {
		searchInDB(e) {
			e.preventDefault();
			if (this.searchTerm) {
				const results = this.$store.getters.shows.filter(
					show => show.name.includes(this.searchTerm) || show.date.includes(this.searchTerm)
				);
				if (results.length) this.$store.dispatch('setFilteredShows', results);
				else this.$store.dispatch('setFilteredShows', [{ name: 'No Results Found!' }]);
			} else {
				this.$store.dispatch('setFilteredShows', []);
			}
		},
	},
};
</script>

<style></style>
