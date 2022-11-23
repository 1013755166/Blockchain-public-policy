var abi=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "butong",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_pName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pCtx",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_limitTime",
				"type": "uint256"
			}
		],
		"name": "createProposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "fdoVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_limitTime",
				"type": "uint256"
			}
		],
		"name": "ProposeEvt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_proposalI",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "Proposeque",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "tdoVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "tong",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "eventType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "VoteEvt",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "blocktimemap",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "get1",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "getProposalCtx",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "getProposalLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "getProposalName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "getProposalVCnt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "host",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voterAddr",
				"type": "address"
			}
		],
		"name": "nume",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			}
		],
		"name": "numq",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voterAddr",
				"type": "address"
			}
		],
		"name": "numr",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voterAddr",
				"type": "address"
			}
		],
		"name": "oppose",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals_lenggaoli",
		"outputs": [
			{
				"internalType": "address",
				"name": "chairperson",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "pName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pCtx",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "initialized",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "limitTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "supportnum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pass",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "voterAddr",
				"type": "address"
			}
		],
		"name": "queryVoting",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters_lenggaoli",
		"outputs": [
			{
				"internalType": "address",
				"name": "delegate",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "voteTimeStamp",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "initialized",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "oppose",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var address="0xb3F07EF2e1F1Be91406d5578facD1b62B439694c"