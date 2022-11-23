// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EthVoting_lenggaoli {

    //附议人信息
    struct Voter_lenggaoli {
		address delegate;    //投票人地址
        uint voteTimeStamp; //投票时的区块时间
        bool initialized;   //判断是否投过票的标志
		bool oppose;       //赞成或反对
		uint[] id;        //附议的id
    }

    //提案内容
    struct Proposal_lenggaoli {
		address chairperson;      //提案人地址
        string pName;        //提案标题
		string pCtx;         //提案内容
        uint voteCount;      //附议人数
        bool initialized;    //判断提案是否存在的标志
        uint limitTime;      //附议限制时间
		uint supportnum;     //支持人数
		uint pass;           //政府决策
    }
	//存储区块时间
	uint[] time1_lenggaoli;
    //所有提案列表
    mapping(uint => Proposal_lenggaoli) public proposals_lenggaoli;
	//附议列表
	mapping(address=>Voter_lenggaoli) public voters_lenggaoli;
	
	//附议事件
	event VoteEvt(string indexed eventType, address _voter, uint timestamp);
	
	//提案事件
	event ProposeEvt(string indexed eventType, uint _proposalId, uint _limitTime);

	//确案事件
	event Proposeque(string indexed eventType,uint _proposalI,uint _time);
	//创建新提案
	function createProposal(string memory _pName, string memory _pCtx, uint _limitTime) public returns (uint){

	  //新提案
	  //以区块时间作为ID
	  uint pId = block.timestamp;
	  Proposal_lenggaoli storage p = proposals_lenggaoli[pId];
                p.pName= _pName;
				p.pCtx= _pCtx;
				p.initialized= true;
				p.chairperson=msg.sender;
				p.limitTime=block.timestamp+ _limitTime;
                p.voteCount= 0;
				p.supportnum=0;
				p.pass=0;
				
		//添加区块时间到数组中
		time1_lenggaoli.push(block.timestamp);
      emit ProposeEvt("propose", pId, _limitTime);
      return pId;
	}

	//进行赞成附议
	function tdoVoting(uint pId) public {

	  //提案是否存在
	  if (proposals_lenggaoli[pId].initialized == false)
	    revert("proposal not exist");
	  
	  uint currentTime = block.timestamp;
	  
	  //是否已超过提案时限
	  if (proposals_lenggaoli[pId].limitTime < currentTime)
	    revert("exceed voting time");
	  
	  //是否已经投过票
	  if (voters_lenggaoli[msg.sender].initialized == true)
	   revert("already vote");

	  //新投票信息
	  Voter_lenggaoli memory voter = Voter_lenggaoli({
	    voteTimeStamp: block.timestamp,
	    initialized: true,
		delegate:msg.sender,
		oppose:true,
		id:time1_lenggaoli
	  });

	  //记录投票信息
	  voters_lenggaoli[msg.sender] = voter;
	  proposals_lenggaoli[pId].voteCount+=1;
	  //记录支持投票信息
	  proposals_lenggaoli[pId].supportnum+=1;
	  
	  emit VoteEvt("vote", msg.sender, block.timestamp);
	}	

	//进行反对附议
	function fdoVoting(uint pId) public {

	  //附议人等不等于提案人
	  if(proposals_lenggaoli[pId].chairperson==voters_lenggaoli[msg.sender].delegate)
	  revert("the chairperson may not object");

	  //提案是否存在
	  if (proposals_lenggaoli[pId].initialized == false)
	    revert("proposal not exist");
	  
	  uint currentTime = block.timestamp;
	  
	  //是否已超过提案时限
	  if (proposals_lenggaoli[pId].limitTime < currentTime)
	    revert("exceed voting time");
	  
	  //是否已经投过票
	  if (voters_lenggaoli[msg.sender].initialized == true)
	   revert("already vote");
	  
	  //新投票信息
	  Voter_lenggaoli memory voter = Voter_lenggaoli({
	    voteTimeStamp: block.timestamp,
	    initialized: true,
		delegate:msg.sender,
		oppose:false,
		id:time1_lenggaoli
	  });
    
	  //记录投票信息
	  voters_lenggaoli[msg.sender] = voter;
	  proposals_lenggaoli[pId].voteCount+=1;
	  
	  emit VoteEvt("vote", msg.sender, block.timestamp);
	}	

	//查询是否附议
	function queryVoting(uint pId, address voterAddr) public view returns (uint){

	  //提案是否存在
	  if (proposals_lenggaoli[pId].initialized == false)
	    revert("proposal not exist");
	  
	  //返回投票时间
	  return voters_lenggaoli[voterAddr].voteTimeStamp;
	}

	//查看投票者是支持还是反对
	function oppose(address voterAddr) public view returns (bool){
		return voters_lenggaoli[voterAddr].oppose;
	}	
	
	//获取区块链时间
    function getBlockTime() public view returns (uint) { 
		return block.timestamp;
    }
	
    //查询提案标题
    function getProposalName(uint pId) public view returns (string memory) { 
		return proposals_lenggaoli[pId].pName;
    } 	
	
	//查询提案内容
    function getProposalCtx(uint pId) public view returns (string memory) { 
		return proposals_lenggaoli[pId].pCtx;
    }
	
	//查询附议人数
    function getProposalVCnt(uint pId) public view returns (uint) { 
		return proposals_lenggaoli[pId].voteCount;
    }
	
	//查询提案期限
    function getProposalLimit(uint pId) public view returns (uint) { 
		return proposals_lenggaoli[pId].limitTime;
    }
	//查询提案人地址
	function get1(uint pId) public view returns(address){
		return proposals_lenggaoli[pId].chairperson;
	}

	//查询区块时间
	function blocktimemap() public view returns (uint[] memory){
		return time1_lenggaoli;
	}

	//赞成人数是否不小于百分之七十
	function numq(uint pId) public view returns (bool){
	    if((proposals_lenggaoli[pId].supportnum/proposals_lenggaoli[pId].voteCount)*10 <7
		&&proposals_lenggaoli[pId].voteCount==0){
			return false;
		}
		return true;
	}

	//通过政府审核
	function tong(uint pId) public  returns (uint){
		//判断是否审核过
		if(proposals_lenggaoli[pId].pass>0)
		revert("It has been decided");

		//通过审核加一
		proposals_lenggaoli[pId].pass+=1;
		emit Proposeque("que", pId, proposals_lenggaoli[pId].pass);
		return proposals_lenggaoli[pId].pass;
	}

	//不通过政府审核
	function butong(uint pId) public  returns (uint){
		//判断是否审核过
		if(proposals_lenggaoli[pId].pass>0)
		revert("It has been decided");
		
		//不通过审核加二
		proposals_lenggaoli[pId].pass+=2;
		emit Proposeque("que", pId, proposals_lenggaoli[pId].pass);
		return proposals_lenggaoli[pId].pass;
	}

	//查询附议人投票时间
	function nume(address voterAddr) public view returns (uint){
		return voters_lenggaoli[voterAddr].voteTimeStamp;
	}

	//查询时间等
	function numr(address voterAddr)public view returns (uint,string memory,uint,bool,uint){
		//获取pid
		uint pId= voters_lenggaoli[voterAddr].id[0];

		return (voters_lenggaoli[voterAddr].voteTimeStamp,
		proposals_lenggaoli[pId].pName,
		proposals_lenggaoli[pId].voteCount,
		voters_lenggaoli[voterAddr].oppose,
		proposals_lenggaoli[pId].pass);
	}
	//查询当前地址
	function host() public view returns(address){
		return msg.sender;
	}
}