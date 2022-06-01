<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang='scss'>
	@import "@/uni_modules/uview-ui/index.scss";
	page{
		background: #f5f5f5
	}
	/*每个页面公共css */
	@import './common/css/common.scss';
</style>
