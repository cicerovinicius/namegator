<template>
	<div>
		<div id="slogan" class="center-align">
			<h1>NameGator</h1>
			<h6>Gerador de domínios</h6>
		</div>
		<div id="main">
			<div class="container">
				<div class="row">
					<div class="col s6">
						<h5>Prefixos <span class="badge">{{ prefixes.length }}</span></h5>
						<div class="card">
							<div class="card-content">
								<ul class="collection">
									<li class="row collection-item" v-for="prefix in prefixes" :key="prefix">
										<div class="col s9">{{ prefix }}</div>
										<div class="col s3 right-align">
											<button class="btn red darken-4" @click="deletePrefix(prefix)"><i class="fa fa-trash"></i></button>
										</div>
									</li>
								</ul>
								<div class="row">
									<div class="input-field col s9">
										<input id="prefix_input" type="text" v-model="prefix" @keyup.enter="addPrefix(prefix)" />
										<label for="prefix_input">Digite o prefixo</label>
									</div>
									<div class="input-field col s3">
										<button class="btn waves-effect waves-light" @click="addPrefix(prefix)"><i class="fa fa-plus"></i></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col s6">
						<h5>Sufixos <span class="badge">{{ sufixes.length }}</span></h5>
						<div class="card">
							<div class="card-content">
								<ul class="collection">
									<li class="row collection-item" v-for="sufix in sufixes" :key="sufix">
										<div class="col s9">{{ sufix }}</div>
										<div class="col s3 right-align">
											<button class="btn red darken-4" @click="deleteSufix(sufix)"><i class="fa fa-trash"></i></button>
										</div>
									</li>
								</ul>
								<div class="row">
									<div class="input-field col s9">
										<input id="sufix_input" type="text" v-model="sufix" @keyup.enter="addSufix(sufix)" />
										<label for="sufix_input">Digite o sufixo</label>
									</div>
									<div class="input-field col s3">
										<button class="btn waves-effect waves-light" @click="addSufix(sufix)"><i class="fa fa-plus"></i></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col s12">
						<h5>Domínios <span class="badge">{{ domains.length }}</span></h5>
						<div class="card">
							<div class="card-content">
								<ul class="collection">
									<li class="row collection-item" v-for="domain in domains" :key="domain">
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
		</div>
	</div>
</template>

<script>
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";
import "font-awesome/css/font-awesome.css";

export default {
	name: 'app',
	data: function(){
		return {
			prefix: '',
			sufix: '',
			prefixes: ['Air', 'Jet', 'Flight'],
			sufixes: ['Hub', 'Station', 'Mart'],
		}
	},
	methods: {
		addPrefix(prefix){
			this.prefixes.push(prefix);
			this.prefix = "";
		},
		addSufix(sufix){
			this.sufixes.push(sufix);
			this.sufix = "";
		},
		deletePrefix(prefix){
			this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
		},
		deleteSufix(sufix){
			this.sufixes.splice(this.sufixes.indexOf(sufix), 1);
		},
		generate(){
			this.domains = [];
			for(const prefix of this.prefixes){
				for(const sufix of this.sufixes){
					this.domains.push(prefix + sufix);
				}
			}
		}
	},
	computed: {
		domains(){
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
	}
}
</script>

<style>
#slogan{
  margin-top: 30px;
  margin-bottom: 30px;
}
#main{
  background-color: #f1f1f1;
  padding-top: 30px;
  scroll-padding-bottom: 30px;
}
</style>