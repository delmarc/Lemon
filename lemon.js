
;(function(configObj,win){
	// still building this so alot is guessing... 
	configObj = configObj || {
		juicingPropertiesList : ["filename","timeStamp","colno","message"],
		maxLemonade : 3,
		takeover : true,
		extendToListening : {
			error:function(passedError){
				console.log("see an error", passedError);
			},
			lemonerror:function(passedError){
				console.log("lemon error", passedError);
			},
			lemonrot:function(passedError){
				console.log("lemon rot even", passedError);
			}
		}
	}

	if(win.LEMON){
		// oh ok
	} else {
		var UTILS = {
			pluck : function(pluckingObject, pluckeeArray){
				var pluckedObj = {};

				for(var i = 0;i<pluckeeArray.length;i++){
					pluckedObj[pluckeeArray[i]] = pluckingObject[pluckeeArray[i]];
				}

				return pluckedObj;
			},
			addEvent : function(){
			},
			POSTRequest: function(){
			},
			GETRequest: function(){
			},
			request: function(){
				console.log
			}
		};

		function lemonInstance(configObj){
			var instanceBase = this;

			this.STATE = {
				errorCount : 0
			};

			this.ACTIONS = {
				send : function(objToSend){
					console.log("hello send",objToSend);
				},
				eventListening : function(eventListening){
					var _this = this;

					if(!!win.addEventListener){
						win.addEventListener("error", function(er){

							instanceBase.ACTIONS.send( UTILS.pluck(er, configObj.juicingPropertiesList) );

							if(configObj.maxLemonade && instanceBase.STATE.errorCount++ < configObj.maxLemonade){
								_this.destroy();
							}

						});

						win.addEventListener("lemonerror", function(){
							alert('OH SNAP');
						});

						win.addEventListener("lemonrot", function(){
							_this.destroy();
						});
					}
				},
				destroy: function(){
					// need to add proper functions so I can remove them later
					win.removeEventListener("lemonerror")
					win.removeEventListener("lemonerror")
				}
			};

			this.ACTIONS.eventListening();

			this.STATE.INIT = true;

			return this;
		}

		win.Lemon = new lemonInstance(configObj)

	}

})({},window);
