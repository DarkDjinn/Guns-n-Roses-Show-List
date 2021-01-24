<template>
	<div class="modal" id="editShowModal" style="display: block;">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">Edit {{ clickedShowName }}</h4>
					<button type="button" class="close" @click="$emit('close')" data-dismiss="modal">
						×
					</button>
				</div>
				<!-- Modal body -->
				<div class="modal-body">
					<form>
						<div class="form-group">
							<label for="date">Show Date</label>
							<input type="text" class="form-control" id="date" v-model="newShowDate" />
						</div>
						<div class="form-group">
							<label for="name">Show Name</label>
							<input type="text" class="form-control" id="name" v-model="newShowName" />
						</div>
						<div class="form-group">
							<label for="type" class="visually-hidden">File Type</label>
							<select class="custom-select" v-model="newFileType">
								<option value="Audio">Audio</option>
								<option value="Video">Video</option>
							</select>
						</div>
						<div class="form-group">
							<label for="quality" class="visually-hidden">File Quality</label>
							<select class="custom-select" v-model="newFileQuality">
								<option value="Very Good">Very Good</option>
								<option value="Good">Good</option>
								<option value="Mediocre">Mediocre</option>
								<option value="Bad">Bad</option>
								<option value="Very bad">Very Bad</option>
							</select>
						</div>
						<div class="col-auto align-self-end d-flex justify-content-between">
							<a @click="addShow" class="btn btn-primary">Submit</a>
							<a @click="$emit('close')" class="btn btn-danger">
								Close
							</a>
						</div>
					</form>
				</div>
				<!-- Modal footer -->
				<!-- <div class="modal-footer">
					
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
import config from '../../config';

export default {
	name: 'EditShowModal',
	props: {
		clickedShowId: Number,
		clickedShowName: String,
	},
	data() {
		return {
			showEditShowModal: false,
			newShowName: '',
			newShowDate: '',
			newFileType: '',
			newFileQuality: '',
		};
	},
	methods: {
		async addShow() {
			if (this.newShowName && this.newShowDate)
				await window.axios.post(`${config.API_URL}/gnr/show/updateshow`, {
					id: this.clickedShowId,
					name: this.newShowName,
					date: this.newShowDate,
					fileType: this.newFileType,
					quality: this.newFileQuality,
				});
			await this.$store.dispatch('setShows');
			this.$emit('updateShowList');
			this.$emit('close');
		},
	},
	async mounted() {
		const { data } = await window.axios.get(
			`${config.API_URL}/gnr/show/getshows/${this.clickedShowId}`
		);
		this.newShowName = data.success[0].name;
		this.newShowDate = data.success[0].date;
		this.newFileType = data.success[0].file_type;
		this.newFileQuality = data.success[0].quality;
	},
};
</script>

<style scoped>
.modal {
	background: rgba(0, 0, 0, 0.6);
}
</style>
