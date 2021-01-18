<template>
	<form class="row g-3">
		<div class="col-auto">
			<label for="date" class="visually-hidden">Show Date</label>
			<input type="text" class="form-control" id="date" v-model="newShowDate" />
		</div>
		<div class="col-auto">
			<label for="name" class="visually-hidden">Show Name</label>
			<input type="text" class="form-control" id="name" v-model="newShowName" />
		</div>
		<div class="col-auto align-self-end">
			<a @click="addShow" class="btn btn-primary">Add Show</a>
		</div>
	</form>
</template>

<script>
export default {
	name: 'AddShow',
	data() {
		return {
			newShowName: '',
			newShowDate: '',
		};
	},
	methods: {
		async addShow() {
			if (this.newShowName && this.newShowDate)
				await window.axios.post('http://10.0.0.49:3423/show/createshow', {
					name: this.newShowName,
					date: this.newShowDate,
				});
			this.newShowName = '';
			this.newShowDate = '';
			await this.$store.dispatch('setShows');
			this.$emit('updateShowList');
		},
	},
};
</script>

<style></style>
