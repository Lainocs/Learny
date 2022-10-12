<template>
  <div class="iphone-x">
		<i>Speaker</i>
		<img src="@/assets/logo.png" alt="logo" width="100">
		<h1>Bienvenue pour cette découverte !</h1>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.iphone-x {
  position: relative;
  margin: 40px 50px;
	padding: 50px 10px;
  min-width: 280px;
	max-width: 280px;
  min-height: 550px;
	max-height: 550px;
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;
  
  &:before,
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  // frontal camera/speaker frame
  &:before {
    top: 0px;
    width: 56%;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  }
  
  i,
  b,
  s,
  span {
    position: absolute;
    display: block;
    color: transparent;
  }
  
  // speaker
  i {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  }
}
</style>
