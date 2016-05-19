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
					"inputs": "Input Data",
					"restApi": "Rest Api",
					"excel": "Excel",
					"outputs": "output data"
					}]},
		 {"id": 2,
		 "number": 2,
		 "name": "Lookup",
		 		 "data": [{
					"inputs": "Input Data",
					"restApi": "Rest Api",
					"excel": "Excel",
					"outputs": "output data"
					}]},
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


