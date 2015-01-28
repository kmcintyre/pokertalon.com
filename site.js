define(['playbook'], function(playbook) {	
	playbook.site_set({key:'init',value:['AWS Poker Room', 'Cards are in the Air', 'So let`s go down', 'to the Feature Table']})
	playbook.site_set({key:'onclose',value:['Casino Closed', 'What are the chances', 'reconnect in a spell']})
	playbook.site_set({key:'onopen',value:['shuffle Up and Deal!']})
	playbook.site_set({key:'hashes',value:['poker']})
	
	playbook.site_set({key:'color',value:{ 'onmessage' : '#0052A5', 'onopen' : '#f7a70c', 'onclose' : '#960018'}})
	playbook.site_set({key:'connection',value:['ws://localhost:8080']})
	return {		
		loaded:true
	}	
})
