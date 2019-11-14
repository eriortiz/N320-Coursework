var canvas = document.getElementById('renderCanvas'); // Get the canvas element
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var camera;

var light, blueMat, greenMat;
var boxes = [];
var selectedMesh = null;

var scene = createScene(); //Call the createScene function

function createScene() {
  // Create the scene space
  var scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.ArcRotateCamera(
    'Camera',
    Math.PI / 2,
    Math.PI / 4,
    4,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  // Add lights to the scene
  var myLight = new BABYLON.DirectionalLight(
    'dir01',
    new BABYLON.Vector3(0, -0.5, 1.0),
    scene
  );

  // Add and manipulate meshes in the scene
  boxes[0] = BABYLON.MeshBuilder.CreateBox('sphere', { size: 0.7 }, scene);
  boxes[1] = BABYLON.MeshBuilder.CreateBox('sphere2', { size: 0.6 }, scene);
  boxes[1].position.x = 1;

  boxes[2] = BABYLON.MeshBuilder.CreateBox('sphere3', { size: 0.5 }, scene);
  boxes[2].position.x = 2;

  light = new BABYLON.HemisphericLight(
    'HemiLight',
    new BABYLON.Vector3(1, 1, 0),
    scene
  );

  blueMat = new BABYLON.StandardMaterial('ground', scene);
  blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  blueMat.emissiveColor = BABYLON.Color3.Blue();

  greenMat = new BABYLON.StandardMaterial('ground', scene);
  greenMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greenMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greenMat.emissiveColor = BABYLON.Color3.Green();

  return scene;
}

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
  //sphere.rotate(BABYLON.Axis.Y, .01, BABYLON.Space.WORLD);
  scene.render();
});

function checkUp() {
  var makeGreen = true;
  boxes.forEach(function(b) {
    if (
      boxes[0].rotation.x == boxes[1].rotation.x &&
      boxes[0].rotation.x == boxes[2].rotation.x
    ) {
      b.material = greenMat;
    }
  });
}

window.addEventListener('keydown', event => {
  if (selectedMesh) {
    if (event.keyCode == 87) {
      TweenLite.to(selectedMesh.rotation, 1, {
        x: '+=20',
        onComplete: checkUp
      });
    }
    if (event.keyCode == 83) {
      TweenLite.to(selectedMesh.rotation, 1, {
        x: '-=20',
        onComplete: checkUp
      });
    }
  }
  console.log(event.keycode);
});

window.addEventListener('click', function() {
  // We try to pick an object

  var pickResult = scene.pick(scene.pointerX, scene.pointerY);

  if (selectedMesh) {
    selectedMesh.material = null;
  }
  if (pickResult.hit) {
    pickResult.pickedMesh.material = blueMat;

    selectedMesh = pickResult.pickedMesh;
  }
});
