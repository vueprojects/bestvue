import reqData from '../models/test/reqData'
export default async function() {
    var consoleTxt = '';
    await reqData.req({
        apiName: 'test',
        params: {
        	cao:'nan'
        }
    }).then(function(response) {
	        consoleTxt += JSON.stringify(response)
    })

     await reqData.req({
        apiName: 'test',
        params: {
            cao:'nan'
        },
        method:'get'
    }).then(function(response) {
            consoleTxt += JSON.stringify(response)
    })

    return consoleTxt;
}
