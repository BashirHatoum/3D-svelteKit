<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import * as THREE from 'three';
	import { createTransition, Float, interactivity, transitions } from '@threlte/extras';
	import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';
	interactivity();
	transitions();
	
	let { position = [0, 0, 0], geometry = new THREE.IcosahedronGeometry(3), rate = 0.5 } = $props();
	let meshRef = $state<THREE.Mesh>();
	

	const soundEffects=[
		new Audio("/sounds/hit1.ogg"),
		new Audio("/sounds/hit2.ogg"),
		new Audio("/sounds/hit3.ogg"),
		// new Audio("/sounds/hit4.ogg"),
		// new Audio("/sounds/hit5.ogg"),
	]
	const materialParams = [
		{ color: 0x2ecc71, roughness: 0 },
		{ color: 0xf1c40f, roughness: 0.4 },
		{ color: 0xe74c3c, roughness: 0.1 },
		{ color: 0x8e44ad, roughness: 0.1 },
		{ color: 0x1abc9c, roughness: 0.1 },
		{ color: 0x2980b9, roughness: 0, metalness: 0.5 },
		{ color: 0x2c3e50, roughness: 0.1, metalness: 0.5 }
	];

	function getRandomMaterial() {
		const randomInt =gsap.utils.random(1,10,1);
		if(randomInt===1){
			return new THREE.MeshNormalMaterial();
		}
		return new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));
	}
	let currentMaterial = $state(getRandomMaterial());
	function handleClick(event: MouseEvent) {
		gsap.utils.random(soundEffects).play();
		if('object' in event && event.object instanceof THREE.Mesh){
			gsap.to(event.object.rotation, {
				x:`+=${gsap.utils.random(0,3)}`,
				y:`+=${gsap.utils.random(0,3)}`,
				z:`+=${gsap.utils.random(0,3)}`,
				duration: 1.3,
				ease: 'elasticOut(1,0.3)',
				yoyo:true
			});
			
			
			event.object.material = getRandomMaterial();
		}
		
	}

	$effect(() => {
		if (meshRef) {
			gsap.from(meshRef.scale, {
				x: 0,
				y: 0,
				z: 0,
				duration: gsap.utils.random(0.8, 1.2),
				delay: gsap.utils.random(0, 0.5),
				ease: 'elastic.out(1, 0.3)'
			});
		}
	});
</script>

<Threlte.Group position={position.map((p) => p * 2) as [number, number, number]}>
	<Float
		speed={5 * rate}
		rotationSpeed={5 * rate}
		rotationIntensity={6 * rate}
		floatIntensity={5 * rate}
	>
		
		<Threlte.Mesh  bind:ref={meshRef} {geometry} material={currentMaterial} interactive onclick={handleClick}></Threlte.Mesh>	
	</Float>
</Threlte.Group>
