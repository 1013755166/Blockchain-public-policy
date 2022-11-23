const web3 =new Web3(Web3.givenProvider);
console.log("web3",web3);
var myContract =new web3.eth.Contract(abi,address);
console.log("myContract==>",myContract);

//添加提案
$("#haha").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
    var message=$("#message").val();
    myContract.methods.createProposal(phone,message,email).send({
        from:name,
        gesPrice:'10000000',
        gas:1000000
    });
    
});
//查询区块时间
$("#ha").click(function(){
    myContract.methods.getBlockTime().call().then(
        function(res){
            $("#xixi").html(res)
        }
    );
});



