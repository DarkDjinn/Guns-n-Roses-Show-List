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
		<div class="col-auto">
			<label for="type" class="visually-hidden">File Type</label>
			<select class="custom-select" v-model="newFileType">
				<option value="Audio">Audio</option>
				<option value="Video">Video</option>
			</select>
		</div>
		<div class="col-auto">
			<label for="quality" class="visually-hidden">File Quality</label>
			<select class="custom-select" v-model="newFileQuality">
				<option value="Very Good">Very Good</option>
				<option value="Good">Good</option>
				<option value="Mediocre">Mediocre</option>
				<option value="Bad">Bad</option>
				<option value="Very bad">Very Bad</option>
			</select>
		</div>
		<div class="col-auto align-self-end">
			<a @click="addShow" class="btn btn-primary">Add Show</a>
		</div>
	</form>
</template>

<script>
import config from '../../config';

export default {
	name: 'AddShow',
	data() {
		return {
			newShowName: '',
			newShowDate: '',
			newFileType: '',
			newFileQuality: '',
		};
	},
	methods: {
		async addShow() {
			if (this.newShowName && this.newShowDate)
				await window.axios.post(`${config.API_URL}/gnr/show/createshow`, {
					name: this.newShowName,
					date: this.newShowDate,
					fileType: this.newFileType,
					quality: this.newFileQuality,
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
