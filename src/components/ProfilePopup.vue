<template>
	<div class="text-center">
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on, attrs }">
				<v-btn @click.stop="dialog = true" color="red lighten-2" dark v-bind="attrs" v-on="on">
					Open Profile
				</v-btn>
			</template>

			<v-card>
				<v-card-title class="headline grey lighten-2">
					User Profile
				</v-card-title>

				<v-card-text class="text-caption">
					<input v-model="user.first_name" type="text" />
					<input v-model="user.last_name" type="text" />
					<input v-model="user.email" type="text" />
					<input v-model="user.ip_address" type="text" />
					<h6 class="left-align">Select Gender:</h6>
					<v-radio-group id="gender" v-model="user.gender" row>
						<v-radio label="Male" value="Male"></v-radio>
						<v-radio label="Female" value="Female"></v-radio>
					</v-radio-group>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click.native="dialog = false" >
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>


<script>
export default {
    name: "ProfilePopup",
    data(){
        return{
            dialog:false
        }
    },
	props: {
		user: {
			type: Object,
			required: true,
		},
	},
};
</script>