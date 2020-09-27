<template>
	<div class="home-page container center-align">
		<Popup />
		<div class="card-container">
			<UserCard
				v-for="user of users"
				:key="user.id"
				v-bind:user="user"
				class="split"
			/>
		</div>
		<Observer v-on:fetch="fetch" />
	</div>
</template>


<script>
import axios from "axios";
import UserCard from "@/components/UserCard";
import Popup from "./Popup";
import Observer from "./Observer";

const baseURL = "http://localhost:3000/users/";

export default {
	components: {
		UserCard,
		Popup,
		Observer,
	},
	data() {
		return {
			users: [],
			page: 1
		};
	},
	methods: {
		// async fetch() {
		// 	try {
		// 		// this.intersected();
		// 		const res = await axios.get(
		// 			"http://localhost:3000/users/?_page=" + this.page
		// 		);
		// 		// const users = await res.json();
		// 		this.users = [...this.users, ...res.data];
		// 		// this.users = [...this.users, ...items.data]
		// 		// this.users.push(...users.data);
		// 	} catch (e) {
		// 		console.log(e);
		// 	}
		// },
		async addUser() {
			const res = await axios.post(baseURL, {
				name: this.first_name,
				email: this.email,
			});

			this.todos = [...this.users, res.data];

			this.first_name = "";
		},
		async fetch() {
			const res = await axios.get(
				`http://localhost:3000/users?_page=${this.page}&_limit=15`
			);
			// const users = await res.json();
			console.log(res)
			this.users = [...this.users, ...res.data];

			console.log("intersected");
			this.page++;
			console.log(this.page);
		},
	},
	// mounted() {
	//  this.intersected();
	// 	this.fetch();
	// },
};
</script>

<style lang="scss" scoped>
.card-container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

.empty-layout {
	height: 100%;
}

.container {
	max-width: 1200px;
}
.split {
	width: 26%;
	margin: 2%;
}
</style>