function displayTrackerFn(index) {
		
			console.log("displayTrackerFn",World.modelObjects[index]);
			
			World.modelObjects[index].property.trackable = new AR.ImageTrackable(World.tracker, World.modelObjects[index].property.trackerTarget, {
				drawables: {
					cam: [World.modelObjects[index].model, World.modelObjects[index].property.buttonRotate, World.modelObjects[index].property.buttonAssembly, World.modelObjects[index].property.buttonDiassembly, World.modelObjects[index].property.buttonHistory, World.modelObjects[index].property.buttonDrawing]
				},
				snapToScreen: {
					snapContainer: document.getElementById('snapContainer')
				},
				onImageRecognized: function(){					
					appearModel(this.index);
				},
				onImageLost:  function(){
					disappearModel(this.index);
				},
				onError: function (errorMessage) {
					alert(errorMessage);
				}
			});
			World.modelObjects[index].property.trackable.index=index;
			console.log("displayTrackerFn finished");

	}