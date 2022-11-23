const haha=artifacts.require("EthVoting");
contract('ha',async accounts=>{
    it("检查当前地址",async()=>{
        let aa=await haha.deployed();
        let aa1=await aa.host();
        assert.equal(aa1,'0x34862439fC767d1F1401fD1027BdeE75d72C314c',"正确")
    })
})