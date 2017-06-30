var targetCollectionResource=null;

function intilizeTracker(baseURL){
    console.log("called intilizeTracker");
	targetCollectionResource=new AR.TargetCollectionResource(baseURL + "tracker.wtc", {
			onLoaded: function () {
				World.resourcesLoaded = true;
				loadingStep();
			},
			onError: function (errorMessage) {
				alert(errorMessage);
			}
		});


    World.tracker = new AR.ImageTracker(targetCollectionResource, {
        onTargetsLoaded: loadingStep,
        onError: function (errorMessage) {
            alert(errorMessage);
        }
    });
}