<template>
	<div>
		<div id="slogan" class="center-align">
			<h1>NameGator</h1>
			<h6>Gerador de domínios</h6>
		</div>
		<div id="main">
			<DomainList></DomainList>
		</div>
	</div>
</template>

<script>
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";
import "font-awesome/css/font-awesome.css";
import DomainList from "./components/DomainList";

export default {
	name: 'app',
	components: {
		DomainList
	},
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