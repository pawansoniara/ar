function initilizeButton(modelObject,baseUrl){
    console.log("called initilizeButton");
		var imgRotate = new AR.ImageResource(baseUrl + "rotateButton.png");
		modelObject.property.buttonRotate = new AR.ImageDrawable(imgRotate, 0.2, {
			translate: {
				x: 0,
				y: 0.75
			},
			onClick: World.toggleAnimateModel
		});
	
		var imgAssembly = new AR.ImageResource(baseUrl + "assemblyBtn.png");
		modelObject.property.buttonAssembly = new AR.ImageDrawable(imgAssembly, 0.2, {
			translate: {
				x: 0.45,
				y: 0.45
			},
			onClick: function toggleplayVideoFn() {
				this.vidonetopay = new AR.context.startVideoPlayer(baseUrl + "video.mp4");
			}
		});
	
		var imgDiassembly = new AR.ImageResource(baseUrl + "diassemblyBtn.png");
		modelObject.property.buttonDiassembly = new AR.ImageDrawable(imgDiassembly, 0.2, {
			translate: {
				x: 0.45,
				y: -0.45
			},
			onClick: function toggleplayVideoFn() {
				this.vidonetopay = new AR.context.startVideoPlayer(baseUrl + "video.mp4");
			}
		});

	
		var imgHistory = new AR.ImageResource(baseUrl + "historyBtn.png");
		modelObject.property.buttonHistory = new AR.ImageDrawable(imgHistory, 0.2, {
			translate: {
				x: -0.45,
				y: 0.45
			},
			onClick: function toggleShowImageFn() {
				console.log("clicked history");
				document.getElementById('heading').innerHTML = "Service Order History"
				document.getElementById('imgContainer').style.visibility = "visible";
			}
		});
		
		var imgDrawing = new AR.ImageResource(baseUrl + "drawingBtn.png");
		modelObject.property.buttonDrawing = new AR.ImageDrawable(imgDrawing, 0.2, {
			translate: {
				x: -0.45,
				y: -0.45
			},
			onClick: function toggleShowImageFn() {
				console.log("clicked history");
				document.getElementById('heading').innerHTML = "Mechanical Drawnings"
				document.getElementById('imgContainer').style.visibility = "visible";
			}
		});
}

function applyLayout(modelObject,layout) {

		modelObject.property.buttonRotate.translate.x = 0;
		modelObject.property.buttonRotate.translate.y = 0.75;

		// World.buttonSnap.translate.x = -layout.offsetX;
		// World.buttonSnap.translate.y = -layout.offsetY - 0.30;

		modelObject.property.buttonAssembly.translate.x = layout.offsetX;
		modelObject.property.buttonAssembly.translate.y = layout.offsetY;

		modelObject.property.buttonDiassembly.translate.x = layout.offsetX;
		modelObject.property.buttonDiassembly.translate.y = -layout.offsetY;

		modelObject.property.buttonHistory.translate.x = -layout.offsetX;
		modelObject.property.buttonHistory.translate.y = layout.offsetY;

		modelObject.property.buttonDrawing.translate.x = -layout.offsetX;
		modelObject.property.buttonDrawing.translate.y = -layout.offsetY;


		modelObject.property.buttonRotate.scale.x = 1;
		modelObject.property.buttonRotate.scale.y = 1;

		// World.buttonSnap.scale.x = 1;
		// World.buttonSnap.scale.y = 1;

		modelObject.property.buttonAssembly.scale.x = 0.8;
		modelObject.property.buttonAssembly.scale.y = 0.8;

		modelObject.property.buttonDiassembly.scale.x = 0.8;
		modelObject.property.buttonDiassembly.scale.y = 0.8;

		modelObject.property.buttonHistory.scale.x = 0.8;
		modelObject.property.buttonHistory.scale.y = 0.8;

		modelObject.property.buttonDrawing.scale.x = 0.8;
		modelObject.property.buttonDrawing.scale.y = 0.8;

		modelObject.model.scale = {
			x: layout.carScale,
			y: layout.carScale,
			z: layout.carScale
		};

		World.defaultScale = layout.carScale;

		modelObject.model.translate = {
			x: 0.0,
			y: layout.carTranslateY,
			z: 0.0
		};
	}