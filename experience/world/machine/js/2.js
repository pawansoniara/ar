function initilizeModel(baseUrl){
    console.log("called initilizeModel");
	for (var i = 0; i < count; i++) {			            
            World.modelObjects[i]={
                model:null,
                property:getDefaultProperty(i)
            }
			
			var model = new AR.Model(baseUrl + "car" + (i+1) + ".wt3", {
				onLoaded: World.loadingStep,
				index:i,
				scale: {
					x: 0.0,
					y: 0.0,
					z: 0.0
				},
				translate: {
					x: 0.0,
					y: 0.05,
					z: 0.0
				},
				rotate: {
					z: 105
				},
				onScaleBegan: function(scale){
					consile.log("onScaleBegan:",this.index);
					World.onScaleBegan(scale,this.index);
				},
				onScaleChanged:  function(scale){
					consile.log("onScaleChanged:",this.index);
					World.onScaleChanged(scale,this.index);
				},
				onScaleEnded: function (scale) {
				},
				onDragBegan: function (x, y) {
				},
				onDragChanged: function (x, y) {
					if (World.snapped) {
						var movement = { x: 0, y: 0 };

						/* Calculate the touch movement between this event and the last one */
						movement.x = World.previousDragValue.x - x;
						movement.y = World.previousDragValue.y - y;

						/* Rotate the car model accordingly to the calculated movement values and the current orientation of the model. */
						this.rotate.y += (Math.cos(this.rotate.z * Math.PI / 180) * movement.x * -1 + Math.sin(this.rotate.z * Math.PI / 180) * movement.y) * 180;
						this.rotate.x += (Math.cos(this.rotate.z * Math.PI / 180) * movement.y + Math.sin(this.rotate.z * Math.PI / 180) * movement.x) * -180;

						World.previousDragValue.x = x;
						World.previousDragValue.y = y;
					}
				},
				onDragEnded: function (x, y) {
					if (World.snapped) {
						World.previousDragValue.x = 0;
						World.previousDragValue.y = 0;
					}
				},
				onRotationBegan: function (angleInDegrees) {
				},
				onRotationChanged: function (angleInDegrees) {
					this.rotate.z = previousRotationValue - angleInDegrees;
				},
				onRotationEnded: function (angleInDegrees) {
					previousRotationValue = this.rotate.z
					console.log("z on rotation", this.rotate.z);
				},
				onClick: function(){
					toggleSnapping(this.index);
				}
			});
            
            World.modelObjects[i].model=model;

			initilizeButton(World.modelObjects[i],baseUrl)            
            World.modelObjects[i].property.appearingAnimation = createAppearingAnimation(World.modelObjects[i], 0.105);
			World.modelObjects[i].property.rotationAnimation = new AR.PropertyAnimation(World.modelObjects[i].model, "rotate.z", -25, 335, 10000);
			displayTrackerFn(i);
		}
}