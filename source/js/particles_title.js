// D:\博客代码\my-blog\source\js\particles_title.js

let scene, camera, renderer;
let backgroundParticles, textParticles;
let textTargets = []; 
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let startTime = 0;

function init() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020205, 0.0001);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 4000);
    camera.position.z = 1000;

    const particleTexture = createParticleTexture();

    // 💡 仅对这里的背景星空进行瘦身
    createBackgroundStars(particleTexture);

    createTextParticles('HZ Lab', particleTexture);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    updateResponsiveState();

    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('mousedown', shatterParticles);
    window.addEventListener('resize', onWindowResize);
}

function createParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.15, 'rgba(230,245,255,0.9)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
}

// 💡 沉浸式星云：消除笨重感，化为细腻星尘
function createBackgroundStars(texture) {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const color = new THREE.Color();

    for (let i = 0; i < 24000; i++) {
        vertices.push(
            (Math.random() - 0.5) * 3500,
            (Math.random() - 0.5) * 3500,
            (Math.random() - 0.5) * 3000 + 500
        );

        const rand = Math.random();
        if (rand > 0.4) {
            color.setHex(0x88CCFF);
        } else if (rand > 0.1) {
            color.setHex(0xDDF0FF);
        } else {
            color.setHex(0xFFFFFF);
        }
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // 💡 核心减负：粒径暴降，提升空灵感
    const material = new THREE.PointsMaterial({
        size: 2.0,             // 从 4.5 暴降到 2.0，彻底消除雪花般的笨重感
        map: texture,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.75,         // 稍微调低透明度，让星空退居幕后，衬托完美字体
        vertexColors: true,
        depthWrite: false
    });

    backgroundParticles = new THREE.Points(geometry, material);
    scene.add(backgroundParticles);
}

// （这部分代码完全保持你的完美状态，一字未改）
function createTextParticles(text, texture) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1600;
    canvas.height = 300;

    ctx.fillStyle = '#fff';
    ctx.font = '600 130px "Inter", "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = "24px";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const points = [];

    let minX = Infinity;
    let maxX = -Infinity;

    for (let y = 0; y < canvas.height; y += 3) {
        for (let x = 0; x < canvas.width; x += 3) {
            if (imgData[(y * canvas.width + x) * 4 + 3] > 128) {
                const pX = (x - canvas.width / 2) * 1.0;
                const pY = -(y - canvas.height / 2) * 1.0;
                const pZ = (Math.random() - 0.5) * 15;
                points.push({ x: pX, y: pY, z: pZ });

                if (pX < minX) minX = pX;
                if (pX > maxX) maxX = pX;
            }
        }
    }

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points.length * 3);

    startTime = Date.now();

    for (let i = 0; i < points.length; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 4000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 4000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4000;

        const delayTime = ((points[i].x - minX) / (maxX - minX)) * 2500;

        textTargets.push({
            x: points[i].x,
            y: points[i].y,
            z: points[i].z,
            delay: delayTime
        });
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        size: 8,
        map: texture,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.95,
        color: 0xE6F5FF
    });

    textParticles = new THREE.Points(geometry, material);
    scene.add(textParticles);
}

function updateResponsiveState() {
    if (!textParticles) return;
    const aspect = window.innerWidth / window.innerHeight;
    if (aspect < 1) {
        const safeScale = aspect * 0.65;
        textParticles.scale.set(safeScale, safeScale, safeScale);
    }
}

function shatterParticles() {
    if (!textParticles) return;
    const positions = textParticles.geometry.attributes.position.array;
    for (let i = 0; i < textTargets.length; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 4000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 4000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4000;
    }
    textParticles.geometry.attributes.position.needsUpdate = true;
    startTime = Date.now();
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2; windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateResponsiveState();
}

function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX; mouseY = event.clientY - windowHalfY;
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    const time = Date.now() * 0.00005;
    const elapsed = Date.now() - startTime;

    camera.position.x += (mouseX * 0.1 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.1 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    if (backgroundParticles) {
        backgroundParticles.rotation.y = time * 0.08;
        backgroundParticles.rotation.x = time * 0.03;
    }

    if (textParticles && textTargets.length > 0) {
        const positions = textParticles.geometry.attributes.position.array;

        for (let i = 0; i < textTargets.length; i++) {
            if (elapsed > textTargets[i].delay) {
                positions[i * 3] += (textTargets[i].x - positions[i * 3]) * 0.06;
                positions[i * 3 + 1] += (textTargets[i].y - positions[i * 3 + 1]) * 0.06;
                positions[i * 3 + 2] += (textTargets[i].z - positions[i * 3 + 2]) * 0.06;
            } else {
                positions[i * 3] += Math.sin(time * 20 + i) * 2;
                positions[i * 3 + 1] += Math.cos(time * 20 + i) * 2;
            }
        }
        textParticles.geometry.attributes.position.needsUpdate = true;
        textParticles.position.y = Math.sin(time * 5) * 2;
    }
    renderer.render(scene, camera);
}

function startApp() {
    if (document.getElementById('canvas-container')) {
        init();
        animate();
    }
}

window.addEventListener('load', startApp);
document.addEventListener('pjax:complete', startApp);