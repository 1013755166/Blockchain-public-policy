const web3 =new Web3(Web3.givenProvider);
console.log("web3",web3);
var myContract =new web3.eth.Contract(abi,address);
console.log("myContract==>",myContract);

$("#dizhip2").click(function(){
    console.log("!")
    var dizhip=$("#dizhip1").val();
    if(dizhip!="0x34862439fC767d1F1401fD1027BdeE75d72C314c"){
        alert("您输入的地址不是政府地址，无法进入政府页面！")
        window.location.href='./pricing.html'
    }
    document.getElementById("heip").style.display="none";
    document.getElementById("dizhip").style.display="none";
    $(document).ready(function(){
        myContract.methods.blocktimemap().call().then(
            function(res){
                for (let i = 0; i < res.length; i++) {
                    myContract.methods.proposals_lenggaoli(res[i]).call().then(
                        function(res1){
                            dateTime=new Date(res1[5]*1000).toDateString();
                            let all=`<li class="schedule-details">
                            <div class="block">
                                <!-- time -->
                                <div class="time">
                                    <i class="fa fa-clock-o"></i>
                                    <span class="time">${dateTime}</span>
                                </div>
                                <!-- Speaker -->
                                <div class="speaker">
                                  <span class="name">${res1[1]}</span>
                                </div>
                                <!-- con --> 
                              <div class="con">
                                  <span class="time">${res1[2]}</span>
                              </div>
                                <!-- Subject -->
                                <div class="subject">
                                <span>总附议人数为：${res1[3]}</span>
                                <br>
                                <span>赞成人数为：${res1[6]}</span>
                                </div>
                                <!-- Venue -->
                                <div class="venue" style="height: 147px;width: 120px;">
                                  <button id="butong" class="btn btn-main-md">不通过</button>
                                  <h6>  </h6>
                                  <button id="tong" class="btn btn-main-md">通过</button>
                                </div>
                            </div>
                        </li>`
                        document.getElementById("qq1").innerHTML+=all; 
                        $("#butong").click(function(){
                            var pid=res[i]
                            myContract.methods.butong(pid).send({
                                from:"0x34862439fC767d1F1401fD1027BdeE75d72C314c",
                                gesPrice:'10000000',
                                gas:1000000
                            })
                        })
                        $("#tong").click(function(){
                            var pid=res[i]
                            myContract.methods.tong(pid).send({
                                from:"0x34862439fC767d1F1401fD1027BdeE75d72C314c",
                                gesPrice:'10000000',
                                gas:1000000
                            })
                        })
                        }
                    )
                }
            }
        )
    })
});
