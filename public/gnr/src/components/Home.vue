<template>
	<div>
		<Navbar />
		<Table class="mt-1" />
	</div>
</template>

<script>
import Navbar from './Navbar.vue';
import Table from './Table.vue';

export default {
	name: 'Home',
	components: {
		Navbar,
		Table,
	},
};
</script>

<style></style>
