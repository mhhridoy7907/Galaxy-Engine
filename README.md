# 🌍 MH2 Solar System - Interactive 3D Visualization

<div align="center">

![Solar System](https://img.shields.io/badge/Three.js-3D%20Graphics-blue?style=flat-square)
![Interactive](https://img.shields.io/badge/Interactive-WebGL-green?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Web%20Based-orange?style=flat-square)
![Live](https://img.shields.io/badge/Live%20Demo-Firebase-red?style=flat-square)

**An immersive 3D interactive visualization of our solar system with realistic planet models, orbital mechanics, and stunning visual effects.**

### 🌐 **[🚀 LIVE DEMO - mh2universe.web.app](https://mh2universe.web.app/)**

[🌐 Live Demo](https://mh2universe.web.app/) • [Controls](#-controls) • [Technologies](#-technologies-used) • [Contributing](#-contributing)

</div>

---

## 📖 Description

MH2 Solar System is an interactive 3D visualization built with **Three.js** that brings our solar system to life. Explore all eight planets, the Moon, asteroid belt, and discover fascinating facts about each celestial body. With smooth animations, realistic textures, and intuitive controls, this project provides an educational and visually stunning experience.

Perfect for:
- 🎓 Educational purposes
- 🌌 Space enthusiasts
- 💻 WebGL/Three.js learning
- 🎨 Interactive web experiences

---

## ✨ Features

### 🪐 Solar System Elements
- ☀️ **Sun** with glowing corona and lens flare effects
- 🌍 **8 Planets** with realistic textures and accurate relative sizes
- 🌙 **Moon** orbiting Earth with synchronized rotation
- 🪨 **Asteroid Belt** with 150+ individual asteroids
- 💫 **Saturn's Rings** with detailed geometry
- ⭐ **Milky Way Background** with thousands of star particles
- ☄️ **Shooting Stars** for dynamic visual effects

### 🎮 Interactive Features
- 🖱️ **Free Camera Control** - Drag to look around
- ⌨️ **Movement Keys** - WASD for navigation, Arrow keys for rotation
- 🔍 **Zoom Functionality** - Scroll wheel and keyboard zoom
- 🎯 **Click-to-Info** - Click any planet for detailed information panel
- 🚀 **Double-Click Zoom** - Instantly zoom to any planet
- 🎬 **Auto Tour Mode** - Automated guided tour of all planets
- 🔊 **Ambient Sound** - Toggle space ambience audio

### 🎨 Visual Effects
- ✨ **Bloom Post-Processing** - Glowing planetary atmospheres
- 🌟 **Lens Flare** - Realistic sun lens effects
- 💫 **Dynamic Lighting** - Multiple light sources with shadows
- 🌊 **Particle Effects** - Space dust and cosmic particles
- 🎯 **Real-Time Planet Labels** - Screen-space text rendering
- 📊 **FPS Counter** - Performance monitoring

### 📱 Responsive Design
- 💻 Works on desktop browsers
- 📊 Adaptive resolution scaling
- 🎯 Touch-friendly interface

---

## 🚀 Quick Start

### Try It Now!
**🌐 [Visit the Live Demo](https://mh2universe.web.app/)** - No installation required!

Simply open the link in your browser and start exploring the solar system immediately.

---

## 🛠️ Installation & Setup

### Prerequisites
- Modern web browser with WebGL support (Chrome, Firefox, Safari, Edge)
- Internet connection (for loading CDN resources and textures)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mh2-solar-system.git
   cd mh2-solar-system
   ```

2. **Local Setup (Simple)**
   - Open `index.html` directly in your browser, OR
   - Use a local server (recommended for best results):
   
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

3. **Access the Application**
   - Open `http://localhost:8000` in your browser

---

## 🎮 Controls

### Camera Movement
| Control | Action |
|---------|--------|
| **Mouse Drag** | Look around (free-look) |
| **WASD** | Move forward/backward/strafe |
| **Arrow Keys** | Turn left/right & move up/down |
| **Scroll Wheel** | Zoom in/out |
| **4 / 1 Keys** | Pitch up/down (alternative) |

### Interaction
| Control | Action |
|---------|--------|
| **Left Click** | Show planet information panel |
| **Double Click** | Zoom to selected planet |
| **🚀 Auto Tour** | Start/stop automated tour |
| **🔊 Sound** | Toggle ambient space audio |
| **✕** | Close information panel |

### Tips
- 🎯 Double-click empty space to return to default view
- 📍 Planet labels update position based on camera angle
- 🔍 Try zooming close to planets for detail view
- ⏱️ Auto tour automatically advances every 3.8 seconds

---

## 📊 Project Structure

```
mh2-solar-system/
├── index.html              # Main application file
├── README.md              # This file
├── im/                    # Image assets directory (Planetary textures)
│   ├── SUN.jpg           # Sun surface texture (2K resolution)
│   ├── Mercury.jpg       # Mercury surface map
│   ├── venus.jpg         # Venus surface texture
│   ├── EE.jpg            # Earth surface map
│   ├── Moon.jpg          # Moon surface texture
│   ├── Mars.jpg          # Mars surface map
│   ├── Jupiter.jpg       # Jupiter gas giant texture
│   ├── Saturn.jpg        # Saturn surface texture
│   ├── uranus.jpg        # Uranus surface texture
│   └── neptune.jpg       # Neptune surface texture
├── LICENSE                # MIT License file
└── package.json           # (Optional) NPM configuration
```

**Asset Details:**
- 🖼️ All textures in `im/` folder are high-resolution planetary surface maps
- 📦 Recommended texture resolution: 2K (2048x2048px) for optimal quality
- 🌐 Saturn ring texture loaded from CDN (optimized ring geometry)
- ⭐ Lensflare textures loaded from Three.js CDN
- 🎵 Ambient audio loaded from Pixabay CDN

---

## 🔧 Technologies Used

### Core Technologies
- **[Three.js](https://threejs.org/)** - 3D JavaScript library
- **HTML5** - Markup structure
- **CSS3** - Styling and animations
- **Vanilla JavaScript (ES6+)** - Core functionality

### Three.js Modules
- `TextGeometry` - 3D text rendering
- `FontLoader` - Font loading
- `EffectComposer` - Post-processing effects
- `UnrealBloomPass` - Bloom effect
- `Lensflare` - Lens flare effects
- `InstancedMesh` - Optimized asteroid rendering

### External Resources
- **Planet Textures** - NASA-quality planetary surface maps
- **Saturn Rings** - High-quality ring geometry
- **Lens Flare Textures** - Three.js examples repository
- **Ambient Audio** - Pixabay royalty-free space music

---

## 🌍 Planet Information

Each planet includes realistic data:

| Planet | Radius | Distance from Sun | Moons | Notable Feature |
|--------|--------|-------------------|-------|-----------------|
| Mercury | 2,439 km | 57.9 M km | 0 | Extreme temperature swings |
| Venus | 6,052 km | 108.2 M km | 0 | Hottest planet (462°C) |
| Earth | 6,371 km | 149.6 M km | 1 | Only known life habitat |
| Mars | 3,389 km | 227.9 M km | 2 | Olympus Mons volcano |
| Jupiter | 69,911 km | 778.5 M km | 95 | Great Red Spot storm |
| Saturn | 58,232 km | 1.43 B km | 146 | Iconic ring system |
| Uranus | 25,362 km | 2.87 B km | 28 | Rotates on its side |
| Neptune | 24,622 km | 4.5 B km | 16 | Fastest winds (2,000+ km/h) |

---

## ⚙️ Performance Optimization

- **InstancedMesh** - Renders 150+ asteroids efficiently
- **Dynamic Shadow Maps** - 2048x2048 resolution for quality
- **Post-Processing** - Optimized bloom effect pipeline
- **Frustum Culling** - Automatic off-screen object culling
- **FPS Monitoring** - Real-time performance tracking

---

## 🎨 Customization Guide

### Change Planet Colors
```javascript
// Modify the material properties in createPlanet()
new THREE.MeshStandardMaterial({
  map: textureLoader.load(tex),
  roughness: 0.85,
  metalness: 0.05,
  emissive: 0x000000, // Add glow color here
  emissiveIntensity: 0
})
```

### Adjust Orbital Speeds
```javascript
// Modify the speed values in realScales object
const realScales = {
  mercury: { size: 2.4, distance: 40, speed: 0.04 },
  // Increase/decrease speed for faster/slower orbits
};
```

### Change Camera Settings
```javascript
// Modify field of view, near/far clipping
const camera = new THREE.PerspectiveCamera(
  75,  // Field of view (degrees)
  aspect, // Aspect ratio
  0.1,    // Near clipping plane
  20000   // Far clipping plane
);
```

---

## 🐛 Known Issues & Limitations

- **Mobile Support**: Touch controls not yet fully implemented
- **Asset Loading**: Requires internet for CDN-hosted textures
- **Performance**: Older browsers may experience frame drops
- **Audio**: Browser autoplay policies may block sound initially

---

## 🚀 Future Enhancements

- [ ] Mobile touch controls
- [ ] Comet system with orbital mechanics
- [ ] Planet collision detection
- [ ] VR support (WebXR)
- [ ] Customizable viewing modes
- [ ] Time acceleration/deceleration
- [ ] Satellite tracking
- [ ] Solar eclipse simulation
- [ ] Local asset hosting (no CDN dependency)

---

## 📚 Learning Resources

- **Three.js Documentation**: https://threejs.org/docs/
- **WebGL Basics**: https://www.khronos.org/webgl/
- **NASA Solar System Facts**: https://spaceplace.nasa.gov/

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Three.js Community** - Amazing 3D library and examples
- **NASA** - Planet texture data and information
- **Pixabay** - Royalty-free ambient audio
- **Solar System Scope** - Saturn ring textures

---

## 📧 Contact & Support


- 📧 Email: mhhriody7907@gmail.com

---

<div align="center">

**Made with ❤️ and ✨**

[⬆ back to top](#-mh2-solar-system---interactive-3d-visualization)

</div>
