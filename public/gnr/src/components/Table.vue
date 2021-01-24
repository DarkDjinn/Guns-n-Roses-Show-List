<template>
	<div>
		<EditShowModal
			:clickedShowId="clickedShowId"
			v-if="showModal"
			@close="showModal = false"
			@updateShowList="updateShowList"
		/>
		<AddShow @updateShowList="updateShowList" />
		<table class="table mt-2">
			<thead>
				<tr>
					<th scope="col" style="width: 5.00%" @click="sortBy('id')"><a href="#">#</a></th>
					<th scope="col" style="width: 10.00%" @click="sortBy('date')">
						<a href="#">Show Date</a>
					</th>
					<th scope="col" style="width: 40.00%" @click="sortBy('name')">
						<a href="#">Show Name</a>
					</th>
					<th scope="col" style="width: 5.00%" @click="sortBy('file_type')">
						<a href="#">Video/Audio</a>
					</th>
					<th scope="col" style="width: 5.00%" @click="sortBy('quality')">
						<a href="#">Quality</a>
					</th>
					<th scope="col" style="width: 10.00%" @click="sortBy('obtained')">
						<a href="#">Obtained</a>
					</th>
					<th scope="col" style="width: 15.00%">Update Status</th>
					<th scope="col" style="width: 5.00%">Edit</th>
					<th scope="col" style="width: 5.00%">Delete</th>
				</tr>
			</thead>
			<tbody
				v-if="
					filteredShowList.length &&
						filteredShowList[0] &&
						filteredShowList[0].name === 'No Results Found!'
				"
			>
				<tr v-for="show in filteredShowList" :key="show.name">
					<th scope="row"></th>
					<td></td>
					<td>{{ show.name }}</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
			<tbody v-else-if="!filteredShowList.length">
				<tr v-for="show in showList" :key="show.id">
					<th scope="row">{{ show.id }}</th>
					<td>{{ show.date }}</td>
					<td>{{ show.name }}</td>
					<td>{{ show.file_type }}</td>
					<td>{{ show.quality }}</td>
					<td>{{ show.obtained === 1 ? '&#x2713;' : '&#10060;' }}</td>
					<td>
						<a class="btn btn-primary" @click="updateStatus(show.id, show.obtained)">{{
							show.obtained === 1 ? 'I Lost It..' : 'I Got It!'
						}}</a>
					</td>
					<td>
						<a @click="toggleModal(show.id)" class="btn btn-info">Edit</a>
					</td>
					<td><a @click="deleteShow(show.id)" class="btn btn-danger">Delete</a></td>
				</tr>
			</tbody>
			<tbody
				v-else-if="
					filteredShowList.length &&
						filteredShowList[0] &&
						filteredShowList[0].name !== 'No Results Found!'
				"
			>
				<tr v-for="show in filteredShowList" :key="show.id">
					<th scope="row">{{ show.id }}</th>
					<td>{{ show.date ? show.date : '' }}</td>
					<td>{{ show.name }}</td>
					<td>{{ show.file_type }}</td>
					<td>{{ show.quality }}</td>
					<td>
						{{
							show.obtained === 1 || show.obtained === 0
								? show.obtained === 1
									? '&#x2713;'
									: '&#10060;'
								: ''
						}}
					</td>
					<td>
						<a class="btn btn-primary" @click="updateStatus(show.id, show.obtained)">{{
							show.obtained === 1 || show.obtained === 0
								? show.obtained === 1
									? 'I Lost It..'
									: 'I Got It!'
								: ''
						}}</a>
					</td>
					<td>
						<a @click="toggleModal(show.id)" class="btn btn-info">Edit</a>
					</td>
					<td><a @click="deleteShow(show.id)" class="btn btn-danger">Delete</a></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import AddShow from './AddShow.vue';
import EditShowModal from './EditShowModal.vue';

export default {
	name: 'Table',
	components: {
		AddShow,
		EditShowModal,
	},
	data() {
		return {
			showList: [],
			filteredShowList: [],
			showModal: false,
			clickedShowId: '',
			sortColumn: {
				name: '',
				direction: '',
			},
		};
	},
	methods: {
		toggleModal(id) {
			this.clickedShowId = id;
			this.showModal = true;
		},
		updateShowList() {
			this.showList = this.$store.getters.shows;
			this.checkFilteredShows();
		},
		checkFilteredShows() {
			if (this.filteredShowList.length) {
				this.filteredShowList = this.showList.filter(
					show =>
						show.name.includes(this.$store.getters.searchTerm) ||
						show.date.includes(this.$store.getters.searchTerm)
				);
			}
		},
		async updateStatus(id, status) {
			await window.axios.post('http://10.0.0.49:3423/gnr/show/updatestatus', { id, status });
			await this.$store.dispatch('setShows');
			this.updateShowList();
		},
		async sortBy(column) {
			if (this.sortColumn.name !== column) {
				this.sortColumn.name = column;
				this.sortColumn.direction = 'asc';
			} else if (this.sortColumn.name === column && this.sortColumn.direction === 'asc') {
				this.sortColumn.direction = 'desc';
			} else if (this.sortColumn.name === column && this.sortColumn.direction === 'desc') {
				this.sortColumn.direction = 'asc';
			}
			await this.$store.dispatch('setShows', this.sortColumn);
			this.updateShowList();
		},
		async deleteShow(id) {
			await window.axios.post('http://10.0.0.49:3423/gnr/show/deleteshow', { id });
			await this.$store.dispatch('setShows');
			this.updateShowList();
		},
	},
	async mounted() {
		await this.$store.dispatch('setShows');
		this.updateShowList();
	},
	watch: {
		'$store.state.filteredShows': function() {
			this.filteredShowList = this.$store.getters.filteredShows;
		},
	},
};
</script>

<style>
.table th,
.table td {
	text-align: center;
}
</style>
