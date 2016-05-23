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
					"inputs": [{sourceStepId: "", sourceFieldId: "", overrideLabel: ""}],
					"readWrite":"Read",
					"type":"Excel",
					"lookup":"",
					"restApi": "",
					"excel": "Excel connect info",
					"outputs": "output data"
					}]},
		 {"id": 2,
		 "number": 2,
		 "name": "Lookup",
		 "data": [{
				    "name": "Transform 1",
					"inputs": [{sourceStepId: "", sourceFieldId: "", overrideLabel: ""}],
					"readWrite": "Both",
					"type": "Lookup",
					"lookup": "Lookup Name A",
					"restApi": "",
					"excel": "",
					"outputs": "output data"
					},
					{
				    "name": "Transform 2",
					"inputs": [{sourceStepId: "", sourceFieldId: "", overrideLabel: ""}],
					"readWrite": "Both",
					"type": "Lookup",
					"lookup": "Lookup Name B",
					"restApi": "",
					"excel": "",
					"outputs": "output data"
					}
					]},
		 {"id": 3,
		 "number": 3,
		 "name": "Write Excel",
		 "data": [{
				    "name": "Write Excel",
					"inputs": [{sourceStepId: "", sourceFieldId: "", overrideLabel: ""}],
					"readWrite": "Write",
					"type": "",
					"lookup": "",					
					"restApi": "",
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
		 "name": "Read Excel 2",
		 "data":[{	"name": "",
					"inputs": [{sourceStepId: "", sourceFieldId: "", overrideLabel: ""}],
					"readWrite": "",
					"type": "",
					"lookup": "",					
					"restApi": "",
					"excel": "",
					"outputs": ""
}]},
		 {"id": 2,
		 "number": 2,
		 "name": "Lookup 2",
		 "data":[{
					"name": "",
					"inputs":[{sourceStepId: "", sourceFieldId: "", overrideLabel: ""}],
					"readWrite": "",
					"type": "",
					"lookup": "",					
					"restApi": "",
					"excel": "",
					"outputs": ""
		 }]},
		 {"id": 3,
		 "number": 3,
		 "name": "Write Excel 2",
		 "data":[{"name": "",
					"inputs": [{sourceStepId: "", sourceFieldId: "", overrideLabel: ""}],
					"readWrite": "",
					"type": "",
					"lookup": "",					
					"restApi": "",
					"excel": "",
					"outputs": ""}]}
		]
	}
];




