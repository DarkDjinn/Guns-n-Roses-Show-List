<template>
	<div>
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
		<table class="table mt-2">
			<thead>
				<tr>
					<th scope="col" style="width: 5.00%">#</th>
					<th scope="col" style="width: 10.00%">Show Date</th>
					<th scope="col" style="width: 55.00%">Show Name</th>
					<th scope="col" style="width: 10.00%">Obtained</th>
					<th scope="col" style="width: 15.00%">Update Status</th>
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
				</tr>
			</tbody>
			<tbody v-else-if="!filteredShowList.length">
				<tr v-for="show in showList" :key="show.id">
					<th scope="row">{{ show.id }}</th>
					<td>{{ show.date }}</td>
					<td>{{ show.name }}</td>
					<td>{{ show.obtained === 1 ? '&#x2713;' : '&#10060;' }}</td>
					<td>
						<a class="btn btn-primary" @click="updateStatus(show.id, show.obtained)">{{
							show.obtained === 1 ? 'I Lost It..' : 'I Got It!'
						}}</a>
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
					<td><a @click="deleteShow(show.id)" class="btn btn-danger">Delete</a></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'List',
	data() {
		return {
			showList: [],
			filteredShowList: [],
			newShowName: '',
			newShowDate: '',
		};
	},
	methods: {
		async updateStatus(id, status) {
			await window.axios.post('http://10.0.0.49:3423/show/updatestatus', { id, status });
			await this.$store.dispatch('getShows');
			this.showList = this.$store.getters.shows;
		},
		async addShow() {
			if (this.newShowName && this.newShowDate)
				await window.axios.post('http://10.0.0.49:3423/show/createshow', {
					name: this.newShowName,
					date: this.newShowDate,
				});
			this.newShowName = '';
			this.newShowDate = '';
			await this.$store.dispatch('getShows');
			this.showList = this.$store.getters.shows;
		},
		async deleteShow(id) {
			await window.axios.post('http://10.0.0.49:3423/show/deleteshow', { id });
			await this.$store.dispatch('getShows');
			this.showList = this.$store.getters.shows;
		},
	},
	async mounted() {
		await this.$store.dispatch('getShows');
		this.showList = this.$store.getters.shows;
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
