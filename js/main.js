const bottleColor = 0xF0E197;
const capColor = 0x1F7500;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
camera.position.y = 10;
camera.position.z = 45;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const rightLight = new THREE.PointLight(0xffffff, 1, 350);
rightLight.position.set(55, 5, 30);
camera.add(rightLight);

const leftLight = new THREE.PointLight(0xffffff, 1, 350);
leftLight.position.set(-55, 5, 30);
camera.add(leftLight);

scene.add(camera)

renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setClearColor(0xFFFAED);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const group = new THREE.Group();
const material = new THREE.MeshStandardMaterial({ color: bottleColor });

const topSecGeometry = new THREE.CylinderGeometry(6, 12, 13, 10);
const topSecBottle = new THREE.Mesh(topSecGeometry, material);
topSecBottle.position.y = 5;
group.add(topSecBottle);

const midSecGeometry = new THREE.CylinderGeometry(12, 12, 3, 10);
const midSecBottle = new THREE.Mesh(midSecGeometry, material);
midSecBottle.position.y = -2;
group.add(midSecBottle);

const bottomSec = new THREE.CylinderGeometry(11.5, 8.5, 13, 10);
const bottomSecBottle = new THREE.Mesh(bottomSec, material);
bottomSecBottle.position.y = -10;
group.add(bottomSecBottle);

const capGeometry = new THREE.CylinderGeometry(6, 6, 1, 10);
const capMaterial = new THREE.MeshBasicMaterial({ color: capColor });
const cap = new THREE.Mesh(capGeometry, capMaterial);
cap.position.y = 12;
group.add(cap);

scene.add(group)

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  
  group.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();