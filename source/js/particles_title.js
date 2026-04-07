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
    createBackgroundStars(particleTexture);
    createTextParticles('HZ Lab', particleTexture);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // 💡 修复一：改为 absolute，并限制高度。让它随页面自然滚动，不再像狗皮膏药一样跟着屏幕！
    renderer.domElement.style.pointerEvents = 'none';
    container.style.pointerEvents = 'none';
    container.style.position = 'absolute';  /* 💡 关键：不再 fixed */
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100vh';       /* 💡 锁定只占满第一屏高度 */
    container.style.zIndex = '0';
    container.style.overflow = 'hidden';

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

function createBackgroundStars(texture) {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const color = new THREE.Color();
    for (let i = 0; i < 24000; i++) {
        vertices.push((Math.random() - 0.5) * 3500, (Math.random() - 0.5) * 3500, (Math.random() - 0.5) * 3000 + 500);
        const rand = Math.random();
        if (rand > 0.4) color.setHex(0x88CCFF);
        else if (rand > 0.1) color.setHex(0xDDF0FF);
        else color.setHex(0xFFFFFF);
        colors.push(color.r, color.g, color.b);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
        size: 2.0, map: texture, blending: THREE.AdditiveBlending,
        transparent: true, opacity: 0.75, vertexColors: true, depthWrite: false
    });
    backgroundParticles = new THREE.Points(geometry, material);
    scene.add(backgroundParticles);
}

function createTextParticles(text, texture) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1600; canvas.height = 300;
    ctx.fillStyle = '#fff';
    ctx.font = '600 130px "Inter", "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.letterSpacing = "24px";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const points = [];
    let minX = Infinity; let maxX = -Infinity;
    for (let y = 0; y < canvas.height; y += 3) {
        for (let x = 0; x < canvas.width; x += 3) {
            if (imgData[(y * canvas.width + x) * 4 + 3] > 128) {
                const pX = (x - canvas.width / 2) * 1.0;
                const pY = -(y - canvas.height / 2) * 1.0;
                points.push({ x: pX, y: pY, z: (Math.random() - 0.5) * 15 });
                if (pX < minX) minX = pX; if (pX > maxX) maxX = pX;
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
        textTargets.push({ x: points[i].x, y: points[i].y, z: points[i].z, delay: ((points[i].x - minX) / (maxX - minX)) * 2500 });
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    textParticles = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 8, map: texture, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.95, color: 0xE6F5FF }));
    scene.add(textParticles);
}

function updateResponsiveState() {
    if (!textParticles) return;
    const aspect = window.innerWidth / window.innerHeight;
    if (aspect < 1) textParticles.scale.set(aspect * 0.65, aspect * 0.65, aspect * 0.65);
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
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight); updateResponsiveState();
}

function onDocumentMouseMove(event) { mouseX = event.clientX - windowHalfX; mouseY = event.clientY - windowHalfY; }

function animate() { requestAnimationFrame(animate); render(); }

function render() {
    const time = Date.now() * 0.00005;
    const elapsed = Date.now() - startTime;
    camera.position.x += (mouseX * 0.1 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.1 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    if (backgroundParticles) { backgroundParticles.rotation.y = time * 0.08; backgroundParticles.rotation.x = time * 0.03; }
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
        textParticles.position.y = Math.sin(time * 5) * 2 + 50;
    }
    renderer.render(scene, camera);
}

// 💡 打字机引擎
function initGeekTypewriter() {
    let subtitleDiv = document.getElementById('geek-subtitle');
    if (!subtitleDiv) {
        subtitleDiv = document.createElement('div');
        subtitleDiv.id = 'geek-subtitle';
        // 💡 修复二：改为 absolute 和 vh，确保只停留在首页的首屏
        subtitleDiv.style.cssText = `
            position: absolute;     /* 💡 关键：不再 fixed */
            top: 51vh;              /* 💡 关键：用视口高度定位，保证它正好在第一屏的 51% 处 */
            left: 50%; 
            transform: translate(-50%, -50%); 
            z-index: 9999;          
            color: #E6F5FF; 
            font-size: 1rem;     
            font-family: "Inter", -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif; 
            font-weight: 300;       
            letter-spacing: 4px;    
            text-shadow: 0 0 8px rgba(230, 245, 255, 0.6); 
            pointer-events: none;   
            text-align: center; 
            width: 100%; 
        `;
        document.body.appendChild(subtitleDiv);
    }

    if (subtitleDiv.getAttribute('data-typed-running')) return;
    subtitleDiv.setAttribute('data-typed-running', 'true');

    const texts = ["人生若只如初见，何事秋风悲画扇","欢迎来到 HZ Lab", "祝你找到自己的频率", "且趁余花谋一笑，朱伞深巷无故人"];
    let textIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        subtitleDiv.innerHTML = currentText.substring(0, charIndex) + '<span class="geek-cursor">|</span>';

        let typeSpeed = isDeleting ? 50 : 150;
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 3000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        } else {
            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        }
        setTimeout(type, typeSpeed);
    }

    if (!document.getElementById('geek-cursor-style')) {
        const style = document.createElement('style');
        style.id = 'geek-cursor-style';
        style.innerHTML = `.geek-cursor { animation: blink 1s infinite; margin-left: 4px; color: #E6F5FF; } @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }`;
        document.head.appendChild(style);
    }
    type();
}

function startApp() {
    // 💡 修复三：强制环境检测！只要不是首页，立刻罢工，绝不干扰文章阅读！
    const path = window.location.pathname;
    const isHomePage = path === '/' || path === '/index.html' || path.startsWith('/page/');

    if (!isHomePage) {
        // 如果是文章页，直接销毁容器，并终止程序
        const canvasContainer = document.getElementById('canvas-container');
        const subtitleDiv = document.getElementById('geek-subtitle');
        if (canvasContainer) canvasContainer.style.display = 'none';
        if (subtitleDiv) subtitleDiv.style.display = 'none';
        return;
    }

    console.log("HZ Lab App Starting...");
    if (document.getElementById('canvas-container')) {
        init();
        animate();
    }
    initGeekTypewriter();
}

window.addEventListener('load', startApp);
document.addEventListener('pjax:complete', startApp);