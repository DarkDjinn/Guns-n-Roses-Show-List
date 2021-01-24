<template>
	<div class="modal" id="songListModal" style="display: block;">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">Song List for {{ clickedShowName }}</h4>
					<button type="button" class="close" @click="$emit('close')" data-dismiss="modal">
						×
					</button>
				</div>
				<!-- Modal body -->
				<div class="modal-body">
					<form class="row g-3">
						<div class="col-auto">
							<label for="song_number" class="visually-hidden">Song Number</label>
							<input type="text" class="form-control" id="song_number" v-model="songNumber" />
						</div>
						<div class="col-auto">
							<label for="song_name" class="visually-hidden">Song Name</label>
							<input type="text" class="form-control" id="song_name" v-model="songName" />
						</div>
						<div class="col-auto align-self-end">
							<a @click="addSong" class="btn btn-primary">Add Song</a>
						</div>
					</form>

					<table class="table mt-2">
						<thead>
							<tr>
								<th scope="col">Song #</th>
								<th scope="col">Song Name</th>
								<th scope="col">Delete</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="song in songs" :key="song.song_number">
								<td>{{ song.song_number }}</td>
								<td>{{ song.song_name }}</td>
								<td><a class="btn btn-danger" @click="deleteSong(song.song_number)">Delete</a></td>
							</tr>
						</tbody>
					</table>

					<!-- <div class="col-auto align-self-end d-flex justify-content-between mt-2">
						<a @click="$emit('close')" class="btn btn-primary">
							Close
						</a>
					</div> -->
				</div>
				<!-- Modal footer -->
				<div class="modal-footer justify-content-start">
					<div>
						<a @click="$emit('close')" class="btn btn-primary">
							Close
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import config from '../../config';

export default {
	name: 'SongListModal',
	props: {
		clickedShowId: Number,
		clickedShowName: String,
	},
	data() {
		return {
			showSongListModal: false,
			songNumber: '',
			songName: '',
			songs: [],
		};
	},
	methods: {
		async addSong() {
			if (!parseInt(this.songNumber)) return;
			if (this.songNumber && this.songName)
				await window.axios.post(`${config.API_URL}/gnr/songs/createsong`, {
					id: this.clickedShowId,
					songNumber: this.songNumber,
					songName: this.songName,
				});
			this.songNumber = '';
			this.songName = '';
			this.fetchSongs();
		},
		async deleteSong(songNumber) {
			await window.axios.post(`${config.API_URL}/gnr/songs/deletesong`, {
				showId: this.clickedShowId,
				songNumber,
			});
			this.fetchSongs();
		},
		async fetchSongs() {
			const { data } = await window.axios.get(
				`${config.API_URL}/gnr/songs/getshowsongs/${this.clickedShowId}`
			);
			this.songs = data.success;
		},
	},
	async mounted() {
		this.fetchSongs();
	},
};
</script>

<style scoped>
.modal {
	background: rgba(0, 0, 0, 0.6);
}

.modal-dialog {
	max-width: 600px;
}
</style>
