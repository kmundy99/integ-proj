import { Integration } from './integration';

export var INTEGRATIONS: Integration[] = [
	{
	"id": 1,
	"name": "Fusion HCM to Taleo",
	"limitTo": 3,
	"steps": [
		{"id": 1,
		 "number": 1,
		 "name": "Read Excel",
		 "data": [{
					"name": "Read Data",
					"inputs": "Input Data",
					"readWrite":"Read",
					"type":"Excel",
					"excel": "Excel connect info",
					"outputs": "output data"
					}]},
		 {"id": 2,
		 "number": 2,
		 "name": "Lookup",
		 		 "data": [{
				    "name": "Transform 1"
					"inputs": "Input Data",
					"readWrite": "Both",
					"type": "Lookup",
					"lookup": "Lookup Name A",
					"outputs": "output data"
					},
					{
				    "name": "Transform 2"
					"inputs": "Input Data",
					"readWrite": "Both",
					"type": "Lookup",
					"lookup": "Lookup Name B",
					"outputs": "output data"
					}
					]},
		 {"id": 3,
		 "number": 3,
		 "name": "Write Excel",
		 		 "data": [{
					"inputs": "Input Data",
					"restApi": "Rest Api",
					"excel": "Excel",
					"outputs": "output data"
					}]}
		]
	},
	{
	"id": 2,
	"name": "Fusion HCM to Learn",
	"limitTo": 2,
	"steps": [
		{"id": 1,
		 "number": 1,
		 "name": "Read Excel 2"},
		 {"id": 2,
		 "number": 2,
		 "name": "Lookup 2"},
		 {"id": 3,
		 "number": 3,
		 "name": "Write Excel 2"}
		]
	}
];

/* */


