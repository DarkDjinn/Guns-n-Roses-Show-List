<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">🔫 GnR Vault 🌹</a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<!-- <li class="nav-item">
						<a class="nav-link" href="#">Create New Show</a>
					</li> -->
				</ul>
				<form class="d-flex ml-auto">
					<input
						v-model="searchTerm"
						@input="searchInDB"
						class="form-control me-2"
						placeholder="Search..."
						aria-label="Search"
					/>
				</form>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
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
