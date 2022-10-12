<!-- component monaco editor -->
<template>
	<div class="monaco-editor">
		<div class="monaco-editor__container" id="container"></div>
	</div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
	name: 'CodeEditor',
	data() {
		return {
			editor: null,
			code: ''
		}
	},
	mounted() {
		this.editor = monaco.editor.create(document.getElementById('container'), {
			value: "<h1>Bienvenue pour cette découverte !</h1>",
			language: 'html',
			theme: 'vs-dark',
		});

	},
	watch: {
	}
}
</script>

<style>
.monaco-editor {
	position: relative;
	width: 70%;
	height: 500px;
}
.monaco-editor__container {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
</style>