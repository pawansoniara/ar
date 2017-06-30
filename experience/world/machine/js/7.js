function onScaleBegan (scale,index) {		
        if (World.snapped) {
			World.previousScaleValue = World.modelObjects[index].model.scale.x;
			World.previousScaleValueButtons = World.modelObjects[index].property.buttonRotate.scale.x;
			World.previousScaleValueButtonAssembly = World.modelObjects[index].property.buttonAssembly.scale.x;
			World.previousScaleValueButtonHistory = World.modelObjects[index].property.buttonHistory.scale.x;
			World.previousScaleValueButtonDiassembly =World.modelObjects[index].propertyWorld.modelObjects[index].property.buttonDiassembly.scale.x;
			World.previousScaleValueButtonDrawing = World.modelObjects[index].property.buttonDrawing.scale.x;


			World.previousTranslateValueRotate.x = World.modelObjects[index].property.buttonRotate.translate.x;
			World.previousTranslateValueRotate.y = World.modelObjects[index].property.buttonRotate.translate.y;

			World.previousTranslateValueAssembly.x = World.modelObjects[index].property.buttonAssembly.translate.x;
			World.previousTranslateValueAssembly.y = World.modelObjects[index].property.buttonAssembly.translate.x;

			World.previousTranslateValueDiassembly.x = World.modelObjects[index].property.buttonDiassembly.translate.x;
			World.previousTranslateValueDiassembly.y = World.modelObjects[index].property.buttonDiassembly.translate.x;

			World.previousTranslateValueHistory.x = World.modelObjects[index].property.buttonHistory.translate.x;
			World.previousTranslateValueHistory.y = World.modelObjects[index].property.buttonHistory.translate.x;

			World.previousTranslateValueDrawing.x = World.modelObjects[index].property.buttonDrawing.translate.x;
			World.previousTranslateValueDrawing.y = World.modelObjects[index].property.buttonDrawing.translate.x;
		}
	}


function onScaleChanged (scale,index) {
		if (World.snapped) {

			World.modelObjects[index].model.scale.x = World.previousScaleValue * scale;
			World.modelObjects[index].model.scale.y = World.modelObjects[index].model.scale.x;
			World.modelObjects[index].model.scale.z = World.modelObjects[index].model.scale.x;

			World.modelObjects[index].property.buttonRotate.scale.x = World.previousScaleValueButtons * scale;
			World.modelObjects[index].property.buttonRotate.scale.y = World.modelObjects[index].property.buttonRotate.scale.x;

			// World.modelObjects[index].property.buttonSnap.scale.x = World.modelObjects[index].property.buttonRotate.scale.x;
			// World.modelObjects[index].property.buttonSnap.scale.y = World.modelObjects[index].property.buttonRotate.scale.x;

			World.modelObjects[index].property.buttonAssembly.scale.x = World.previousScaleValueButtonAssembly * scale;
			World.modelObjects[index].property.buttonAssembly.scale.y = World.modelObjects[index].property.buttonAssembly.scale.x;

			World.modelObjects[index].property.buttonDiassembly.scale.x = World.previousScaleValueButtonDiassembly * scale;
			World.modelObjects[index].property.buttonDiassembly.scale.y = World.modelObjects[index].property.buttonDiassembly.scale.x;

			World.modelObjects[index].property.buttonHistory.scale.x = World.previousScaleValueButtonHistory * scale;
			World.modelObjects[index].property.buttonHistory.scale.y = World.modelObjects[index].property.buttonHistory.scale.x;

			World.modelObjects[index].property.buttonDrawing.scale.x = World.previousScaleValueButtonDrawing * scale;
			World.modelObjects[index].property.buttonDrawing.scale.y = World.modelObjects[index].property.buttonDrawing.scale.x;




			World.modelObjects[index].property.buttonRotate.translate.x = World.previousTranslateValueRotate.x * scale;
			World.modelObjects[index].property.buttonRotate.translate.y = World.previousTranslateValueRotate.y * scale;

			// World.modelObjects[index].property.buttonSnap.translate.x = World.previousTranslateValueSnap.x * scale;
			// World.modelObjects[index].property.buttonSnap.translate.y = World.previousTranslateValueSnap.y * scale;

			World.modelObjects[index].property.buttonAssembly.translate.x = World.previousTranslateValueAssembly.x * scale;
			World.modelObjects[index].property.buttonAssembly.translate.y = World.previousTranslateValueAssembly.y * scale;

			World.modelObjects[index].property.buttonDiassembly.translate.x = World.previousTranslateValueDiassembly.x * scale;
			World.modelObjects[index].property.buttonDiassembly.translate.y = -World.previousTranslateValueDiassembly.y * scale;

			World.modelObjects[index].property.buttonHistory.translate.x = World.previousTranslateValueHistory.x * scale;
			World.modelObjects[index].property.buttonHistory.translate.y = -World.previousTranslateValueHistory.y * scale;

			World.modelObjects[index].property.buttonDrawing.translate.x = World.previousTranslateValueDrawing.x * scale;
			World.modelObjects[index].property.buttonDrawing.translate.y = World.previousTranslateValueDrawing.y * scale;
		}
	}