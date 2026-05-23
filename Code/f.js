
// ======================================================
// ================= SCENE ==============================
// ======================================================

const scene = new THREE.Scene();

scene.fog = new THREE.FogExp2(
0x000000,
0.00045
);

// ======================================================
// ================= CAMERA =============================
// ======================================================

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
20000
);

camera.position.set(0,40,180);

// ======================================================
// ================= RENDERER ===========================
// ======================================================

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(
window.devicePixelRatio
);

renderer.outputEncoding =
THREE.sRGBEncoding;

renderer.shadowMap.enabled = true;

document.body.appendChild(
renderer.domElement
);

// ======================================================
// ================= LOADERS ============================
// ======================================================

const loader =
new THREE.TextureLoader();

const gltfLoader =
new THREE.GLTFLoader();

// ======================================================
// ================= LIGHTS =============================
// ======================================================

scene.add(
new THREE.AmbientLight(
0x222233,
0.22
)
);

const sunLight =
new THREE.PointLight(
0xffaa55,
2.5,
6000
);

sunLight.position.set(0,0,0);

scene.add(sunLight);

// ======================================================
// ================= GALAXY =============================
// ======================================================

const galaxyGeo =
new THREE.BufferGeometry();

const galaxyCount = 30000;

const galaxyPos =
new Float32Array(
galaxyCount * 3
);

for(let i=0;i<galaxyCount;i++){

galaxyPos[i*3] =
(Math.random()-0.5)*12000;

galaxyPos[i*3+1] =
(Math.random()-0.5)*12000;

galaxyPos[i*3+2] =
(Math.random()-0.5)*12000;

}

galaxyGeo.setAttribute(

"position",

new THREE.BufferAttribute(
galaxyPos,
3
)

);

const galaxy = new THREE.Points(

galaxyGeo,

new THREE.PointsMaterial({

color:0xffffff,

size:1.2,

transparent:true,

opacity:0.85,

depthWrite:false

})

);

scene.add(galaxy);

// ======================================================
// ================= SUN ================================
// ======================================================

const sunTexture =
loader.load("im/sun.webp");

const sun = new THREE.Mesh(

new THREE.SphereGeometry(
20,
128,
128
),

new THREE.MeshBasicMaterial({

map:sunTexture

})

);

scene.add(sun);

// ======================================================
// ================= BLACK HOLE =========================
// ======================================================

const blackHole =
new THREE.Mesh(

new THREE.SphereGeometry(
7,
64,
64
),

new THREE.MeshBasicMaterial({

color:0x000000

})

);

scene.add(blackHole);

// ======================================================
// ================= PLANETS ============================
// ======================================================

const planets = [];

let earthMesh;
let moonMesh;
let moonAngle = 0;

let selected = null;

// ======================================================
// ================= SATURN RING ========================
// ======================================================

const ringTex = loader.load(
"https://threejs.org/examples/textures/sprites/saturnringcolor.jpg"
);

function createPlanet(
name,
texture,
size,
distance,
speed,
isEarth=false,
isSaturn=false
){

const tex = loader.load(texture);

tex.encoding = THREE.sRGBEncoding;

tex.anisotropy =
renderer.capabilities.getMaxAnisotropy();

const material =
new THREE.MeshStandardMaterial({

map:tex,

roughness:1,

metalness:0

});

const mesh = new THREE.Mesh(

new THREE.SphereGeometry(
size,
128,
128
),

material

);

scene.add(mesh);

let ring = null;

if(isSaturn){

ring = new THREE.Mesh(

new THREE.RingGeometry(
size+2,
size+7,
128
),

new THREE.MeshBasicMaterial({

map:ringTex,

transparent:true,

side:THREE.DoubleSide

})

);

ring.rotation.x = Math.PI/2;

scene.add(ring);

}

planets.push({

mesh,
distance,
angle:Math.random()*Math.PI*2,
speed,
ring

});

if(isEarth){

earthMesh = mesh;

moonMesh = new THREE.Mesh(

new THREE.SphereGeometry(
1.8,
64,
64
),

new THREE.MeshStandardMaterial({

map:loader.load(
"im/moon.jpg"
)

})

);

scene.add(moonMesh);

}

}

// ======================================================
// ================= CREATE PLANETS =====================
// ======================================================

createPlanet(
"Mercury",
"im/m.jpg",
3,
35,
0.02
);

createPlanet(
"Venus",
"im/v.jpg",
5,
50,
0.015
);

createPlanet(
"Earth",
"im/EE.jpg",
5.8,
70,
0.01,
true
);

createPlanet(
"Mars",
"im/mars.jpg",
4.5,
92,
0.008
);

createPlanet(
"Jupiter",
"im/jup.jpg",
13,
130,
0.004
);

createPlanet(
"Saturn",
"im/stu.jpg",
11,
180,
0.003,
false,
true
);

createPlanet(
"Uranus",
"im/uranus.jpg",
8,
235,
0.002
);

createPlanet(
"Neptune",
"im/nuptune.jpg",
8,
290,
0.0015
);

// ======================================================
// ================= GLB MODELS =========================
// ======================================================

let satellite;
let satellite1;
let rocket;

// ================= SATELLITE =================

gltfLoader.load(
"im/rocket.glb",
function(gltf){

satellite = gltf.scene;

satellite.scale.set(0.1,0.1,0.1);

satellite.position.set(
520,
40,
-80
);


satellite.matrixAutoUpdate = false;
satellite.updateMatrix();

scene.add(satellite);

}
);








gltfLoader.load(
"im/satellite.glb",
function(gltf){

satellite = gltf.scene;

satellite.scale.set(1,1,1);

satellite.position.set(80,40,-80);


satellite.matrixAutoUpdate = false;
satellite.updateMatrix();

scene.add(satellite);

}
);




// ======================================================
// ================= IMAGE FRAME ========================
// ======================================================

const bannerGroup =
new THREE.Group();

scene.add(bannerGroup);

// ================= IMAGE =================

const imageTexture = loader.load(
"im/mh hridoy.jpg"
);

imageTexture.encoding =
THREE.sRGBEncoding;

imageTexture.anisotropy =
renderer.capabilities.getMaxAnisotropy();

const imagePlane =
new THREE.Mesh(

new THREE.PlaneGeometry(
34,
34
),

new THREE.MeshBasicMaterial({

map:imageTexture,

toneMapped:false,

transparent:false,

side:THREE.FrontSide,

color:0xffffff

})

);

imagePlane.position.z = 0.2;

bannerGroup.add(imagePlane);

// ======================================================
// ================= FRAME ==============================
// ======================================================

const outer =
new THREE.Shape();

outer.moveTo(-20,-20);
outer.lineTo(20,-20);
outer.lineTo(20,20);
outer.lineTo(-20,20);
outer.lineTo(-20,-20);

const hole =
new THREE.Path();

hole.moveTo(-17,-17);
hole.lineTo(17,-17);
hole.lineTo(17,17);
hole.lineTo(-17,17);
hole.lineTo(-17,-17);

outer.holes.push(hole);

const frameGeo =
new THREE.ExtrudeGeometry(

outer,

{
depth:2,

bevelEnabled:true,

bevelSize:0.4,

bevelThickness:0.4,

curveSegments:18
}

);

const frameMat =
new THREE.MeshStandardMaterial({

color:0x2a2a2a,

metalness:0.7,

roughness:0.5

});

const frame =
new THREE.Mesh(
frameGeo,
frameMat
);

frame.position.z = -1;

bannerGroup.add(frame);

// ======================================================
// ================= BACK COVER =========================
// ======================================================

const backCover =
new THREE.Mesh(

new THREE.BoxGeometry(
40,
40,
1.8
),

new THREE.MeshStandardMaterial({

color:0x111111,

metalness:0.5,

roughness:0.7

})

);

backCover.position.z = -2.3;

bannerGroup.add(backCover);

// ======================================================
// ================= FRAME POSITION =====================
// ======================================================

bannerGroup.position.set(
145,
55,
-95
);

bannerGroup.rotation.y = -0.6;

// ======================================================
// ================= 3D TEXT ============================
// ======================================================

const fontLoader =
new THREE.FontLoader();

fontLoader.load(

"https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",

function(font){

const textGeo =
new THREE.TextGeometry(

"MH HRIDOY",

{

font:font,

size:8,

height:3,

curveSegments:12,

bevelEnabled:true,

bevelThickness:0.5,

bevelSize:0.3,

bevelOffset:0,

bevelSegments:5

}

);

textGeo.computeBoundingBox();

const offset =

-0.5 * (

textGeo.boundingBox.max.x -

textGeo.boundingBox.min.x

);

textGeo.translate(
offset,
0,
0
);

const textMat =
new THREE.MeshStandardMaterial({

color:0x00ffff,

metalness:1,

roughness:0.2

});

const textMesh =
new THREE.Mesh(
textGeo,
textMat
);

textMesh.position.set(
0,
60,
-120
);

scene.add(textMesh);

window.textMesh = textMesh;

}

);

// ======================================================
// ================= POINTER LOCK =======================
// ======================================================

let yaw = 0;
let pitch = 0;

document.body.addEventListener(
"click",
()=>{

document.body.requestPointerLock();

}
);

document.addEventListener(
"mousemove",
(e)=>{

if(
document.pointerLockElement !== document.body
)
return;

yaw -= e.movementX * 0.0025;

pitch -= e.movementY * 0.0025;

pitch = Math.max(
-1.5,
Math.min(1.5,pitch)
);

}
);

// ======================================================
// ================= KEYS ===============================
// ======================================================

const keys = {};

window.addEventListener(
"keydown",
e=>keys[e.key.toLowerCase()] = true
);

window.addEventListener(
"keyup",
e=>keys[e.key.toLowerCase()] = false
);

// ======================================================
// ================= PLANET SELECT ======================
// ======================================================

window.addEventListener(
"click",
()=>{

if(
document.pointerLockElement !== document.body
)
return;

const raycaster =
new THREE.Raycaster();

raycaster.setFromCamera(
new THREE.Vector2(0,0),
camera
);

const hits =
raycaster.intersectObjects(
planets.map(p=>p.mesh)
);

if(hits.length > 0){

selected = hits[0].object;

}

}
);

// ======================================================
// ================= FOLLOW =============================
// ======================================================

function followPlanet(){

if(selected){

camera.position.lerp(

new THREE.Vector3(

selected.position.x + 25,
selected.position.y + 12,
selected.position.z + 25

),

0.04

);

}

}

// ======================================================
// ================= ANIMATE ============================
// ======================================================

function animate(){

requestAnimationFrame(animate);

// ================= GALAXY =================

galaxy.rotation.y += 0.00008;

// ================= SUN =================

sun.rotation.y += 0.0015;

// ================= PLANETS =================

planets.forEach(p=>{

p.angle += p.speed;

p.mesh.position.x =
Math.cos(p.angle) * p.distance;

p.mesh.position.z =
Math.sin(p.angle) * p.distance;

p.mesh.rotation.y += 0.003;

if(p.ring){

p.ring.position.copy(
p.mesh.position
);

}

});

// ================= MOON =================

if(earthMesh && moonMesh){

moonAngle += 0.03;

moonMesh.position.x =

earthMesh.position.x +
Math.cos(moonAngle) * 11;

moonMesh.position.z =

earthMesh.position.z +
Math.sin(moonAngle) * 11;

}

// ================= TEXT ROTATE =================

if(window.textMesh){

window.textMesh.rotation.y += 0.003;

}

// ================= SATELLITE ANIMATION =================

if(satellite){

satellite.rotation.y += 0.01;

satellite.position.x =
120 + Math.cos(Date.now()*0.0005)*30;

satellite.position.z =
-80 + Math.sin(Date.now()*0.0005)*30;

}

if(satellite1){

satellite1.rotation.y -= 0.008;

satellite1.position.x =
-140 + Math.cos(Date.now()*0.0004)*45;

satellite1.position.z =
-120 + Math.sin(Date.now()*0.0004)*45;

}

if(rocket){

rocket.rotation.y += 0.02;

rocket.position.y =
20 + Math.sin(Date.now()*0.002)*8;

}

// ================= FRAME FLOAT =================

bannerGroup.position.y =
55 + Math.sin(Date.now()*0.001)*2;

bannerGroup.rotation.z =
Math.sin(Date.now()*0.0007)*0.02;

// CAMERA MOVE
let move = new THREE.Vector3();

const forward = new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));
const right = new THREE.Vector3(Math.sin(yaw+Math.PI/2),0,Math.cos(yaw+Math.PI/2));

if(keys["s"]) move.add(forward);
if(keys["w"]) move.sub(forward);
if(keys["a"]) move.sub(right);
if(keys["d"]) move.add(right);

if(keys["arrowup"]) move.y += 1;
if(keys["arrowdown"]) move.y -= 1;

move.normalize();
camera.position.addScaledVector(move,1);



const rotSpeed = 0.03;

if(keys["arrowleft"]) yaw += rotSpeed;
if(keys["arrowright"]) yaw -= rotSpeed;



if(keys["4"]) pitch += rotSpeed;
if(keys["1"]) pitch -= rotSpeed;

pitch = Math.max(-1.5,Math.min(1.5,pitch));

// ================= CAMERA ROTATE =================

camera.rotation.order = "YXZ";

camera.rotation.y = yaw;

camera.rotation.x = pitch;

// ================= FOLLOW =================

followPlanet();

// ================= RENDER =================

renderer.render(
scene,
camera
);

}

animate();

// ======================================================
// ================= RESIZE =============================
// ======================================================

window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

}
);

