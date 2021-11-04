<template>
	<div>
		<h5>{{ title }} <span class="badge">{{ items.length }}</span></h5>
		<div class="card">
			<div class="card-content">
				<ul class="collection">
					<li class="row collection-item" v-for="item in items" :key="item">
						<div class="col s9">{{ item }}</div>
						<div class="col s3 right-align">
							<button class="btn red darken-4" @click="deleteItem(item)"><i class="fa fa-trash"></i></button>
						</div>
					</li>
				</ul>
				<div class="row">
					<div class="input-field col s9">
						<input id="item_input" type="text" v-model="item" @keyup.enter="addItem(item)" />
						<label for="item_input">Digite o item</label>
					</div>
					<div class="input-field col s3">
						<button class="btn waves-effect waves-light" @click="addItem(item)"><i class="fa fa-plus"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppItemList',
		props: ["items", "title"],
		data() {
			return {
				item: ""
			};
		},
		methods: {
			addItem(item){
				this.$emit("addItem", item);
				this.item = "";
			},
			deleteItem(item){
				this.$emit("deleteItem", item);
			}
		}
	};
</script>

<style scoped>
</style>