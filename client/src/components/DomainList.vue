<template>
	<div class="container">
		<div class="row">
			<div class="col s6">
				<AppItemList :items="prefixes" title="Prefixos" @addItem="addPrefix" @deleteItem="deletePrefix"></AppItemList>
			</div>
			<div class="col s6">
				<AppItemList :items="sufixes" title="Sufixos" @addItem="addSufix" @deleteItem="deleteSufix"></AppItemList>
			</div>
			
			<div class="col s12">
				<h5>Domínios <span class="badge">{{ domains.length }}</span></h5>
				<div class="card">
					<div class="card-content">
						<ul class="collection">
							<li class="row collection-item" v-for="domain in domains" :key="domain.name">
								<div class="col s9">{{ domain.name }}</div>
								<div class="col s3 right-align">
									<a :href="domain.checkout" class="btn green accent-3" target="_blank"><i class="fa fa-shopping-cart"></i></a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios/dist/axios";
	import AppItemList from "./AppItemList";
	
	export default {
		name: "app",
		components: {
			AppItemList
		},
		data: function(){
			return {
				prefixes: [],
				sufixes: [],
			}
		},
		methods: {
			addPrefix(prefix){
				this.prefixes.push(prefix);
			},
			addSufix(sufix){
				this.sufixes.push(sufix);
			},
			deletePrefix(prefix){
				this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
			},
			deleteSufix(sufix){
				this.sufixes.splice(this.sufixes.indexOf(sufix), 1);
			},
		},
		computed: {
			domains(){
				console.log("generating domains...");
				const domains = [];
				for(const prefix of this.prefixes){
					for(const sufix of this.sufixes){
						const name = prefix + sufix;
						const url = name.toLowerCase();
						const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`;
						domains.push({
							name,
							checkout
						});
					}
				}
				return domains;
			}
		},
		created() {
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
					query: `
						{
							prefixes: items (type: "prefix"){
								id
								type
								description
							}
							sufixes: items (type: "sufix"){
								id
								type
								description
							}
						}
					`
				}
			}).then(response => {
				const query = response.data;
				this.prefixes = query.data.prefixes.map(prefix => prefix.description);
				this.sufixes = query.data.sufixes.map(sufix => sufix.description);
			});
		}
	}
</script>

<style>
</style>