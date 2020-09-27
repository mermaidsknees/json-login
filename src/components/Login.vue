<template>
	<div class="login">
		<!-- <h1>Login</h1> -->
		<form class="card login-card" action>
			<div class="card-content">
				<span class="card-title">Authentification</span>
				<div class="input-field">
					<input v-model="email" type="text" />
					<label for="email">Email</label>
				</div>
				<div class="card-button">
					<button
						@click.prevent="submitHandler()"
						class="btn waves-teal waves-light"
						type="submit"
						name="action"
					>
						Log In
						<i class="material-icons right">send</i>
					</button>
				</div>
			</div>
		</form>
		<!-- <div>whatever</div> -->
		<v-alert v-if="emailSent" color="green"
			>Email was sent to {{ email }}</v-alert
		>
	</div>
</template>


<script>
// import firebase from "firebase";
import axios from "axios";

export default {
	name: "Login",
	data() {
		return {
			email: "",
			emailSent: false,
			error: null,
			success: false,
		};
	},
	methods: {
		async submitHandler() {
			this.$router.push('/home')
			// e.preventDefault()
			const formData = {
				email: this.email,
				actionCodeSettings: {
					url: "http://localhost:8080/home",
					handleCodeInApp: true,
				},
			};

		},
	},
};
</script>

<style scoped lang='scss'>
body {
	overflow: hidden;
}

.login {
	height: 92vh;
}

.btn {
	background-color: #ffac81;
	background-image: linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
}
form {
	display: inline-block;
	max-width: 500px;
}

.login-card {
	width: 500px;
}
</style>