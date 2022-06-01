const db = uniCloud.database();

//获取题目
export const getQuestion = async (tableName) =>{
    //event为客户端上传的参数
    const res = await db.collection(tableName).get();  
    return res.result;
}

