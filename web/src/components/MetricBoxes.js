import React from 'react';
import MetricBox from "./metricBox";

function renderBoxes(numberToRender, score) {
    var boxes = [];
    //var capacity = numberToRender * 2;

    for (var i = 1; i <= numberToRender; i++) {
        let boxState = "";
        if (i * 2 <= score) {
            boxState = "double";
        } else if ((i * 2) - 1 === score) {
            boxState = "single";
        }

        boxes.push(
            <MetricBox key={i} boxState={boxState}/>
        )
    }
    return boxes;
}

export default function ({metric}) {
    console.log(metric);
    if (metric.metricType === "encourage") {
        let numberOfBoxes = Math.ceil(metric.goal / 2);

        return (
            <div className="metric-boxes encourage">
                {renderBoxes(numberOfBoxes, metric.score)}
            </div>
        )
    } else {
        let numberOfBoxes = Math.ceil(metric.score / 2) + 1;

        return (
            <div className="metric-boxes discourage">
                {renderBoxes(numberOfBoxes, metric.score)}
            </div>
        );
    }
} ;