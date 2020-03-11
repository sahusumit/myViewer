import React from "react";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";

cornerstoneTools.init();
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneTools.external.Hammer = Hammer;

const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;

const rectangularMeasurment=()=>{
return(
    <div>
cornerstoneTools.addTool({RectangleRoiTool}),
cornerstoneTools.setToolActive('RectangleRoi', {{mouseButtonMask:5}});
</div>
)
}

export default rectangularMeasurment;