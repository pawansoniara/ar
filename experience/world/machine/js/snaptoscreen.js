var baseUrl = "http://10.10.8.33:8080/content/style/"
var count = 3;

var World = {
	loaded: false,
	rotating: false,
	trackableVisible: false,
	snapped: false,
	resourcesLoaded: false,
	interactionContainer: 'snapContainer',
	layout: {
		normal: {
			offsetX: 0.35,
			offsetY: 0.45,
			opacity: 0.0,
			carScale: 0.105,
			carTranslateY: 0.05
		},
		snapped: {
			offsetX: 0.45,
			offsetY: 0.45,
			opacity: 0.2,
			carScale: 0.105,
			carTranslateY: 0
		}
	},
	previousDragValue: { x: 0, y: 0 },
	previousScaleValue: 0,
	previousScaleValueButtons: 0,

	previousScaleValueButtonAssembly: 0,
	previousScaleValueButtonHistory: 0,
	previousScaleValueButtonDrawing: 0,
	previousScaleValueButtonDiassembly: 0,

	previousRotationValue: 0,

	previousTranslateValueRotate: { x: 0, y: 0 },
	previousTranslateValueSnap: { x: 0, y: 0 },
	previousTranslateValueAssembly: { x: 0, y: 0 },
	previousTranslateValueDiassembly: { x: 0, y: 0 },
	previousTranslateValueHistory: { x: 0, y: 0 },
	previousTranslateValueDrawing: { x: 0, y: 0 },

	defaultScale: 0,

	init: function initFn() {
		this.createOverlays(baseUrl);
	},

	createOverlays: function createOverlaysFn(baseUrl) {
		console.log("called createOverlays");
		intilizeTracker(baseUrl);
		World.modelObjects=[];
		initilizeModel(baseUrl);
		
		dismissBtn = function () {
			console.log("dismiss btn clicked")
			document.getElementById('imgContainer').style.visibility = "hidden";
		}	
	},

	toggleAnimateModel: function toggleAnimateModelFn() {
		if (!World.rotationAnimation.isRunning()) {
			if (!World.rotating) {
				// Starting an animation with .start(-1) will loop it indefinitely.
				World.rotationAnimation.start(-1);
				World.rotating = true;
			} else {
				// Resumes the rotation animation
				World.rotationAnimation.resume();
			}
		} else {
			// Pauses the rotation animation
			World.rotationAnimation.pause();
		}

		return false;
	}


};

World.init();
