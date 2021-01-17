<template>
	<div>
		<Navbar />
		<List class="mt-1" />
	</div>
</template>

<script>
import Navbar from './Navbar.vue';
import List from './List.vue';

export default {
	name: 'Home',
	components: {
		Navbar,
		List,
	},
};
</script>

<style></style>
