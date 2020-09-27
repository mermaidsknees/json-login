<template>
	<div class="popup">
		<v-app id="override">
			<v-container class="no-gap">
				<v-dialog max-width="600px" activator="#foo">
					<v-card>
						<v-form>
							<!-- Тут должен был быть @submit.prevent но он не захотел работать -->
							<v-card-title>Add User</v-card-title>
							<v-card-text>
								<div class="input-field">
									<input :class="{ invalid: firstNameError}" v-model="users.first_name" type="text" />
									<label for="first_name">First Name</label>
									<small v-if="firstNameError" class="helper-text invalid-small">Fill in this field with your First Name</small>
								</div>
								<div class="input-field">
									<input v-model="users.last_name" type="text" />
									<label for="last_name">Last Name</label>
									
								</div>
								<div class="input-field">
									<input
										:class="{ invalid: emailError}"
										v-model="users.email"
										type="text"
									/>
									<label for="email">Email</label>
									<small
										v-if="emailError"
										class="helper-text invalid-small"
										>Fill in this field with your Email</small
									>
								</div>

								<div class="input-field">
									<input v-model="users.ip_address" type="text" />
									<label for="gender">IP Address</label>
								</div>
								<!-- The number of genders is a sensitive subject that may raise holywars -->
								<h6 class="left-align">Select Gender:</h6>
								<v-radio-group id="gender" v-model="users.gender" row>
									<v-radio label="Male" value="Male"></v-radio>
									<v-radio label="Female" value="Female"></v-radio>
								</v-radio-group>
								<div class="card-button">
									<button
										@click.prevent="handleSubmit()"
										class="btn waves-teal waves-light"
										type="submit"
										name="action"
									>
										Create User
										<i class="material-icons right">send</i>
									</button>
								</div>
							</v-card-text>
						</v-form>
					</v-card>
				</v-dialog>
				<v-btn id="foo">Create User</v-btn>
			</v-container>
		</v-app>
	</div>
</template>

<script>
import axios from "axios";
import Vuelidate from "vuelidate";
// import {email,required} from 'vuelidate/lib/validators'

export default {
	name: "Popup",
	data() {
		return {
			emailError:'',
			firstNameError:'',
			users: {
				first_name: "",
				last_name: "",
				email: "",
				ip_address: "",
			},
			reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
		};
	},
	methods: {
		handleSubmit(e) {
			// this.emailError = ''
			// this.firstNameError = ''

			if (
				this.users.first_name &&
				this.users.email &&
				this.reg.test(this.users.email)
			) {
				axios.post("http://localhost:3000/users", this.users).then((res) => {
					console.warn(res);
				});
			}
			if((!this.reg.test(this.users.email)) || (this.users.email = '')){
				this.emailError = true;
			}
			if(!this.users.first_name){
				this.firstNameError = true;
			}
		}
	},
};
</script>


<style>
.v-application--wrap {
	min-height: 1vh !important;
	margin-bottom: 1vh;
}

.invalid-small {
	color: red !important;
	text-align: left;
}

v-card-title {
	color: black;
}

h6 {
	color: #9e9e9e;
	font-size: 16px;
}
#gender {
	margin-bottom: 30px;
}
</style>