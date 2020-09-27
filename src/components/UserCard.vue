<template>
	<div class="user-card">
		<div class="card teal darken-2">
			<div class="card-content white-text">
				<span class="card-title">{{user.first_name}} {{user.last_name}}</span>
			</div>
			<div class="card-action">
				<!-- <a href="#">Open Profile</a> -->
				<ProfilePopup v-bind:user="user"/>
				<!-- <a href="#">Edit</a> -->
				<i @click.prevent="deleteUser" class="material-icons delete-user">close</i>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import ProfilePopup from './ProfilePopup'

export default {
	name: "UserCard",
	components:{
		ProfilePopup
	},
	props: {
		user: {
			type: Object,
			required: true,
		},
	},
	methods: {
		deleteUser(e) {
			e.preventDefault()
			axios.delete("http://localhost:3000/users/" + this.user.id).then((res) => res.data);
		},
	},
};
</script>

<style lang="scss" scoped>
.card-action{
	display: flex;
	justify-content: space-between ;
}
.delete-user {
	color: red;
	position: relative;
	top: 5px;
	left: 5px;

	transition: color 0.2s linear;

	&:hover {
		color: white;
		cursor: pointer;
	}
}
</style>