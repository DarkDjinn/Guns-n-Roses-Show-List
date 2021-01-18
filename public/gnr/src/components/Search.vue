<template>
	<form class="d-flex ml-auto">
		<input
			:value="this.$store.getters.searchTerm"
			@input="searchInDB"
			class="form-control me-2"
			placeholder="Search..."
			aria-label="Search"
		/>
	</form>
</template>

<script>
export default {
	name: 'Search',
	methods: {
		searchInDB(e) {
			e.preventDefault();
			this.$store.commit('setSearchTerm', e.target.value);
			if (this.$store.getters.searchTerm) {
				const results = this.$store.getters.shows.filter(
					show =>
						show.name.includes(this.$store.getters.searchTerm) ||
						show.date.includes(this.$store.getters.searchTerm)
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
