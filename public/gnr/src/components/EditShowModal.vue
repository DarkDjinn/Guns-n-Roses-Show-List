<template>
	<div class="modal" id="editShowModal" style="display: block;">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">Edit Show</h4>
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
export default {
	name: 'EditShowModal',
	props: {
		clickedShowId: String,
	},
	data() {
		return {
			showEditShowModal: false,
			newShowName: '',
			newShowDate: '',
		};
	},
	methods: {
		async addShow() {
			if (this.newShowName && this.newShowDate)
				await window.axios.post('http://10.0.0.49:3423/show/updateshow', {
					id: this.clickedShowId,
					name: this.newShowName,
					date: this.newShowDate,
				});
			await this.$store.dispatch('setShows');
			this.$emit('updateShowList');
			this.$emit('close');
		},
	},
	async mounted() {
		const { data } = await window.axios.get(
			`http://10.0.0.49:3423/show/getshows/${this.clickedShowId}`
		);
		this.newShowName = data.success[0].name;
		this.newShowDate = data.success[0].date;
	},
};
</script>

<style scoped>
.modal {
	background: rgba(0, 0, 0, 0.6);
}
</style>
