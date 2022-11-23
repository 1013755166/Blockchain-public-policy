const web3 =new Web3(Web3.givenProvider);
console.log("web3",web3);
var myContract =new web3.eth.Contract(abi,address);
console.log("myContract==>",myContract);


//将提案数据显示在页面上
$(document).ready(function(){
    myContract.methods.blocktimemap().call().then(
        function(res){
            for (let i = 0; i < res.length; i++) {
                myContract.methods.proposals_lenggaoli(res[i]).call().then(
                    function(res1){
                        dateTime=new Date(res1[5]*1000).toDateString();
                        let all=`
                            <div class="col-lg-4 col-md-6">
                                    <!-- Pricing Item -->
                                <div class="pricing-item featured">
                                    <div class="pricing-heading">
                                        <!-- Title -->
                                        <div class="title"style="visibility: hidden;">
                                            <input id="fa" type="text">
                                        </div>
                                        <!-- Price -->
                                        <div class="price">
                                            <h2 id="ha1">${res1[1]}</h2>
                                            <p id="ha2">${dateTime}</p>
                                        </div>
                                    </div>
                                    <div class="pricing-body">
                                        <!-- Feature List -->
                                        <ul class="feature-list m-0 p-0">
                                            <li><p><span class="fa fa-check-circle available"></span>${res1[2]}</p></li>
                                        </ul>
                                    </div>
                                    <div class="pricing-footer text-center">
                                        <button id="zan" class="btn btn-main-md">赞成</button>
                                        <button id="fan" class="btn btn-main-md">反对</button>
                                    </div>
                                </div>
                            </div>`
                            
                        document.getElementById("row").innerHTML+=all;
                        $("#zan").click(function(){
                            document.getElementById("hei").style.display="block";
                            document.getElementById("dizhi").style.display="block";
                        });
                        $("#dizhi2").click(function(){
                            var pid=res[i]
                            console.log(pid)
                            var dizhiw=$("#dizhi1").val();
                            console.log(dizhiw)
                            myContract.methods.tdoVoting(pid).send({
                                from:dizhiw,
                                gesPrice:'10000000',
                                gas:1000000
                            });
                            document.getElementById("hei").style.display="none";
                            document.getElementById("dizhi").style.display="none";
                        })
                        $("#fan").click(function(){
                            document.getElementById("hei").style.display="block";
                            document.getElementById("dizhix").style.display="block";
                        });
                        $("#dizhix2").click(function(){
                            var pid=res[i]
                            console.log(pid)
                            var dizhiw=$("#dizhix1").val();
                            console.log(dizhiw)
                            myContract.methods.fdoVoting(pid).send({
                                from:dizhiw,
                                gesPrice:'10000000',
                                gas:1000000
                            });
                            document.getElementById("hei").style.display="none";
                            document.getElementById("dizhix").style.display="none";
                        })
                    }
                ); 
            }  
        }
    );
});