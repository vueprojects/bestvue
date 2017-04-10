const textDict = {
	//订单状态
	indentStatus: {
		'00' : '待审核',
		'01' : '审核通过',
		'02' : '审核不通过'
 	},

 	//订单活动类型
 	indentTypes: {
 		'01' : '活动',
 		'02' : '商品'
 	}
}

const textHelper = {
    //dict
    textDict(status, type){
    	return textDict[type][status]
    }
};

export default textHelper;
