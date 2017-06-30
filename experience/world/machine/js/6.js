
function loadingStep() {
		console.log("called loadingStep");
		for (var i = 0; i < count; i++) {
			if (World.resourcesLoaded && World.modelObjects[i].model.isLoaded()) {

				if (World.trackableVisible && !World.modelObjects[i].property.appearingAnimation.isRunning()) {
					World.modelObjects[i].property.appearingAnimation.start();
				}

				var cssDivLeft = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
				var cssDivRight = " style='display: table-cell;vertical-align: middle; text-align: left;'";
				document.getElementById('loadingMessage').innerHTML =
					"<div" + cssDivLeft + ">Scan CarAd ClientTracker Image:</div>" +
					"<div" + cssDivRight + "><img src='assets/car.png'></img></div>";
			}
		}
	}


function removeLoadingBar () {
	console.log("called removeLoadingBar");
		// if (!World.loaded && World.resourcesLoaded && World.modelCar.isLoaded()) {
		// 	var e = document.getElementById('loadingMessage');
		// 	e.parentElement.removeChild(e);
		// 	World.loaded = true;
		// }
			World.loaded = true;
	}


function appearModel(index) {
	console.log("called appear::"+index);
		
		removeLoadingBar();
		World.trackableVisible = true;
		if (World.loaded && !World.snapped) {
			// Resets the properties to the initial values.
			resetModel(index);
			World.modelObjects[index].property.appearingAnimation.start();
		}
	}
function disappearModel(index) {
		World.trackableVisible = false;
	}

function resetModel(index) {
		World.modelObjects[index].property.rotationAnimation.stop();
		World.rotating = false;
		World.modelObjects[index].model.rotate.x = 0;
		World.modelObjects[index].model.rotate.y = 0;
		World.modelObjects[index].model.rotate.z = 105;
	}

function toggleSnapping(index) {

		if (World.modelObjects[index].property.appearingAnimation.isRunning()) {
			World.modelObjects[index].property.appearingAnimation.stop();
		}
		World.snapped = !World.snapped;
		World.modelObjects[index].property.trackable.snapToScreen.enabled = World.snapped;

		if (World.snapped) {
			World.applyLayout(World.layout.snapped);

		} else {
			World.applyLayout(World.layout.normal);
		}
	}