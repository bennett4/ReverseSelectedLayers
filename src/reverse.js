import sketch from 'sketch';

function throwError(message) {
    sketch.UI.message(message);
    throw new Error(message);
}

export default function reverse() {
    const document = sketch.getSelectedDocument();
    const selectedLayers = document.selectedLayers.layers;

    if (selectedLayers.length < 2) {
        throwError("Please select 2 or more layers to reverse.");
    }

    var indexArray = new Array;
    selectedLayers.forEach(nativeLayer => {
        var layer = sketch.fromNative(nativeLayer);
        indexArray.push(layer.index);
    });

    selectedLayers.forEach(nativeLayer => {
        var layer = sketch.fromNative(nativeLayer);
        layer.index = indexArray.pop();
    });
}
