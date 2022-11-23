const web3 =new Web3(Web3.givenProvider);
console.log("web3",web3);
var myContract =new web3.eth.Contract(abi,address);
console.log("myContract==>",myContract);

$("#chaxun").click(function(){
    var addr=$("#expire").val();
    myContract.methods.numr(addr).call().then(
        function(res){
            var a;
            if(res[3]==false){
                a="不赞成"
            }else{
                a="赞成"
            }
            var b;
            if(res[4]==0){
                b="未进入政府审核"
            }else if(res[4]==1){
                b="审核通过"
            }else{
                b="审核未通过"
            }
            dateTime=new Date(res[0]*1000).toDateString();
            let all=`<li class="schedule-details">
            <div class="block">
                <!-- time -->
                <div class="time">
                    <i class="fa fa-clock-o"></i>
                    <span class="time">${dateTime}</span>
                </div>
                <!-- Speaker -->
                <div class="speaker">
                    
                  <span class="name">${res[1]}</span>
                </div>
              <!-- con --> 
              <div class="con">
                  <span class="time">${res[2]}</span>
              </div>
                <!-- Subject -->
                <div class="subject">
                    <span>${a}</span>
                </div>
                <!-- Venue -->
                <div class="venue">
                  <span>${b}</span>
                </div>
            </div>
        </li>`
        document.getElementById("qq1").innerHTML+=all; 
        }
    )
})
$(document).ready(function(){

})