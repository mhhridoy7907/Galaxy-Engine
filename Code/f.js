
// ================= SCENE =================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// ================= CAMERA =================
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
10000
);
camera.position.set(0,40,150);

// ================= RENDERER =================
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// ================= LIGHT =================
scene.add(new THREE.AmbientLight(0xffffff,0.4));

const sunLight = new THREE.PointLight(0xffaa00,5,5000);
scene.add(sunLight);

// ================= STARS =================
const starGeo = new THREE.BufferGeometry();
const starVertices = [];

for(let i=0;i<10000;i++){
starVertices.push(
(Math.random()-0.5)*5000,
(Math.random()-0.5)*5000,
(Math.random()-0.5)*5000
);
}

starGeo.setAttribute(
"position",
new THREE.Float32BufferAttribute(starVertices,3)
);

scene.add(new THREE.Points(
starGeo,
new THREE.PointsMaterial({color:0xffffff,size:2})
));

// ================= TEXTURE =================
const textureLoader = new THREE.TextureLoader();

// ================= SUN =================
const sun = new THREE.Mesh(
new THREE.SphereGeometry(18,64,64),
new THREE.MeshBasicMaterial({
map:textureLoader.load("im/sun.webp")
})
);
scene.add(sun);

// ================= GLOW =================
const glowMesh = new THREE.Mesh(
new THREE.SphereGeometry(24,64,64),
new THREE.MeshBasicMaterial({
color:0xffaa00,
transparent:true,
opacity:0.35,
blending:THREE.AdditiveBlending
})
);
scene.add(glowMesh);

const fontLoader = new THREE.FontLoader();

fontLoader.load(
'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
function(font){

// TEXT GEOMETRY
const textGeo = new THREE.TextGeometry("BANGLADESH",{
font:font,
size:8,
height:3,
curveSegments:12,
bevelEnabled:true,
bevelThickness:0.5,
bevelSize:0.3,
bevelOffset:0,
bevelSegments:5
});

// CENTER TEXT
textGeo.computeBoundingBox();

const offset =
-0.5 * (
textGeo.boundingBox.max.x -
textGeo.boundingBox.min.x
);

// MATERIAL (REALISTIC)
const textMat = new THREE.MeshStandardMaterial({
color:0x00ffff,
metalness:0.9,
roughness:0.25,
emissive:0x003344,
emissiveIntensity:0.6
});


const textMesh = new THREE.Mesh(textGeo,textMat);

textMesh.position.set(offset,40,0);


textMesh.rotation.x = -0.2;
textMesh.rotation.y = 0.2;


textMesh.castShadow = true;
textMesh.receiveShadow = true;

scene.add(textMesh);

// ================= LIGHTS FOR SHADOW =================


const dirLight = new THREE.DirectionalLight(0xffffff,1.2);
dirLight.position.set(50,80,50);
dirLight.castShadow = true;


dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;
dirLight.shadow.camera.near = 1;
dirLight.shadow.camera.far = 200;
dirLight.shadow.camera.left = -100;
dirLight.shadow.camera.right = 100;
dirLight.shadow.camera.top = 100;
dirLight.shadow.camera.bottom = -100;

scene.add(dirLight);


const glowLight = new THREE.PointLight(0x00ffff,1.5,200);
glowLight.position.set(0,45,20);
scene.add(glowLight);

}
);



const planets = [];

let earthMesh;
let moonMesh;
let moonAngle = 0;

function createPlanet(name,tex,size,distance,speed,isEarth=false){

const mesh = new THREE.Mesh(
new THREE.SphereGeometry(size,64,64),
new THREE.MeshStandardMaterial({
map:textureLoader.load(tex)
})
);

scene.add(mesh);

planets.push({
mesh,
distance,
angle:Math.random()*Math.PI*2,
speed
});

if(isEarth){
earthMesh = mesh;

moonMesh = new THREE.Mesh(
new THREE.SphereGeometry(1.5,32,32),
new THREE.MeshStandardMaterial({
map:textureLoader.load("im/moon.jpg")
})
);

scene.add(moonMesh);
}

}

createPlanet("Mercury","im/m.jpg",3,30,0.02);
createPlanet("Venus","im/v.jpg",5,45,0.015);
createPlanet("Earth","im/EE.jpg",5.5,65,0.01,true);
createPlanet("Mars","im/mars.jpg",4,85,0.008);
createPlanet("Jupiter","im/jup.jpg",12,120,0.004);
createPlanet("Saturn","im/stu.jpg",10,170,0.003);
createPlanet("Uranus","im/uranus.jpg",8,220,0.002);
createPlanet("Neptune","im/nuptune.jpg",8,270,0.0015);


// ================= CAMERA CONTROL =================
let yaw=0,pitch=0,dragging=false;

document.addEventListener("mousedown",()=>dragging=true);
document.addEventListener("mouseup",()=>dragging=false);

document.addEventListener("mousemove",(e)=>{
if(!dragging)return;
yaw -= e.movementX*0.0025;
pitch -= e.movementY*0.0025;
pitch=Math.max(-1.5,Math.min(1.5,pitch));
});

const keys={};

window.addEventListener("keydown",e=>keys[e.key.toLowerCase()]=true);
window.addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false);



function animate(){
requestAnimationFrame(animate);



planets.forEach(p=>{
p.angle += p.speed;

p.mesh.position.x = Math.cos(p.angle)*p.distance;
p.mesh.position.z = Math.sin(p.angle)*p.distance;

p.mesh.rotation.y += 0.01;
});



if(earthMesh && moonMesh){

moonAngle += 0.05;

moonMesh.position.x =
earthMesh.position.x + Math.cos(moonAngle)*10;

moonMesh.position.z =
earthMesh.position.z + Math.sin(moonAngle)*10;

moonMesh.position.y = 0;
}



sun.rotation.y += 0.002;

const pulse = 1 + Math.sin(Date.now()*0.002)*0.03;

glowMesh.scale.set(pulse,pulse,pulse);

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

camera.rotation.order="YXZ";
camera.rotation.y=yaw;
camera.rotation.x=pitch;



renderer.render(scene,camera);
}

animate();



window.addEventListener("resize",()=>{
camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);
});
