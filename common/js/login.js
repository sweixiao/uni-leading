export const getUser= () =>{
	uni.getUserProfile({
	  desc: "用于完善用户资料",
	  success: (res) => {
	    console.log("用户信息", res.userInfo);
	    let { userInfo } = res;
	     uni.setStorageSync('userInfo', res.userInfo)
	  },
	});
}
