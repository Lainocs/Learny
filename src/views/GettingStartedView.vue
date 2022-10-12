<template>
  <div class="home">
		<CodeEditor />
		<MobilePhone />
  </div>
</template>

<script>
// @ is an alias to /src

import MobilePhone from '@/components/MobilePhone.vue'
import CodeEditor from '@/components/CodeEditor.vue';
export default {
  name: 'HomeView',
  components: {
    MobilePhone,
    CodeEditor
	}
}
</script>

<style scoped>
	.home {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>
