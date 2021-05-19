import * as THREE from 'three'

const loader = new THREE.FontLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const render = new THREE.WebGLRenderer();

render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);
loader.load('font.json',function (font){
	const geometry = new THREE.TextGeometry( 'Hello three.js!', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
})

