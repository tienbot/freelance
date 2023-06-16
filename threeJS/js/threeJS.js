import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';
// import { RectAreaLightHelper } from 'RectAreaLightHelper'
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib';

function init() {
    let container = document.querySelector('.containerJS');

    //Scene
    const scene = new THREE.Scene()
    // scene.background = new THREE.Color("#E2DFE1");

    //Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(0, 0.2, 1)

    //render
    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    renderer.setSize(window.innerWidth/1.3, window.innerHeight/1.3)
    container.appendChild(renderer.domElement)
    renderer.setClearColor( 0x000000, 0 )

    let plain;
    {
        plain = new THREE.Mesh(
            // new THREE.PlaneGeometry(1000, 1000),
            // new THREE.MeshBasicMaterial({color: "#E2DFE1"})
        )
        plain.reciveShadow = true;
        plain.position.set(0, -1, 0)
        plain.rotateX(-Math.PI / 2);
        scene.add(plain)
    }

    // Model
    {
        const loader = new GLTFLoader();
        let obj = null;

        loader.load('./model/scene.gltf', function (gltf) { 
            obj = gltf; 
            obj.scene.scale.set(0.6, 0.6, 0.6);
            
            scene.add(obj.scene);
        });
    }
    
    {
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(-2, 0, 10)
        light.lookAt(0, -1, 0)
        scene.add(light)

        // Helper
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    {
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2, 0, 5)
        light.lookAt(0, 1, 0)
        scene.add(light)

        // Helper
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    RectAreaLightUniformsLib.init();
    {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
        rectLight.position.set(-10,0,0)
        rectLight.rotation.y = Math.PI + Math.PI/4;
        scene.add(rectLight)
    }

    {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
        rectLight.position.set(10,0,0)
        rectLight.rotation.y = Math.PI - Math.PI/4;
        scene.add(rectLight)
    }
    
    //OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;
    controls.enableDamping = true;
    controls.enableZoom = false;

    //Resize
    window.addEventListener('resize', onWindowResize, false)
    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth/1.3, window.innerHeight/1.3)
    }

    // Animate
    function animate() {
        requestAnimationFrame(animate)
        controls.update();
        renderer.render(scene, camera)
    }
    animate()

}

init()