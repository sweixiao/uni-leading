'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const db = uniCloud.database();
	const res = await db.collection('fe-question').get()
	//返回数据给客户端
	return res.data
};
