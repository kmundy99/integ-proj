import { Integration } from './integration';

export var INTEGRATIONS: Integration[] = [
	{
	"id": 1,
	"name": "Fusion HCM to Taleo",
	"steps": [
		{"id": 1,
		 "number": 1,
		 "name": "Read Excel"},
		 {"id": 2,
		 "number": 2,
		 "name": "Lookup"},
		 {"id": 3,
		 "number": 3,
		 "name": "Write Excel"}
		]
	},
	{
	"id": 2,
	"name": "Fusion HCM to Learn",
	"steps": [
		{"id": 1,
		 "number": 1,
		 "name": "Read Excel"},
		 {"id": 2,
		 "number": 2,
		 "name": "Lookup"},
		 {"id": 3,
		 "number": 3,
		 "name": "Write Excel"}
		]
	}
];

/* */


