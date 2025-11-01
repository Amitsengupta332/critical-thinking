// input
const rawApiData = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    in_stock: true,
    rating: 4.5,
    brand: "SoundMax",
    description:
      "Over-ear noise-cancelling wireless headphones with 30 hours of battery life.",
    images: ["https://example.com/images/headphones1.jpg"],
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    category: "Computers",
    price: 89.5,
    in_stock: true,
    rating: 4.7,
    brand: "KeyPro",
    description:
      "RGB backlit mechanical keyboard with blue switches and detachable wrist rest.",
    images: ["https://example.com/images/keyboard1.jpg"],
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 120.0,
    in_stock: false,
    rating: 4.2,
    brand: "FitPulse",
    description:
      "Tracks heart rate, steps, sleep, and supports GPS and notifications.",
    images: ["https://example.com/images/watch1.jpg"],
  },
  {
    id: 4,
    name: "4K LED Smart TV 43-inch",
    category: "Home Appliances",
    price: 399.99,
    in_stock: true,
    rating: 4.8,
    brand: "VisionTech",
    description:
      "Ultra HD smart TV with HDR10 support and built-in streaming apps.",
    images: ["https://example.com/images/tv1.jpg"],
  },
  {
    id: 5,
    name: "Portable SSD 1TB",
    category: "Storage",
    price: 149.99,
    in_stock: true,
    rating: 4.6,
    brand: "DataX",
    description:
      "High-speed external solid-state drive with USB-C connectivity.",
    images: ["https://example.com/images/ssd1.jpg"],
  },
  {
    id: 6,
    name: "Smartphone Tripod Stand",
    category: "Accessories",
    price: 25.49,
    in_stock: true,
    rating: 4.3,
    brand: "PhotoFlex",
    description:
      "Adjustable aluminum tripod stand compatible with all smartphones.",
    images: ["https://example.com/images/tripod1.jpg"],
  },
  {
    id: 7,
    name: "Gaming Mouse RGB",
    category: "Computers",
    price: 35.0,
    in_stock: true,
    rating: 4.5,
    brand: "ClickMaster",
    description:
      "Ergonomic gaming mouse with 7 programmable buttons and RGB lighting.",
    images: ["https://example.com/images/mouse1.jpg"],
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    category: "Electronics",
    price: 79.99,
    in_stock: false,
    rating: 4.1,
    brand: "SoundBee",
    description:
      "Compact wireless earbuds with active noise cancellation and fast charging.",
    images: ["https://example.com/images/earbuds1.jpg"],
  },
  {
    id: 9,
    name: "Smart Home Speaker",
    category: "Smart Devices",
    price: 129.99,
    in_stock: true,
    rating: 4.7,
    brand: "EchoWave",
    description:
      "Voice-controlled smart speaker with premium sound and smart assistant integration.",
    images: ["https://example.com/images/speaker1.jpg"],
  },
  {
    id: 10,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 45.0,
    in_stock: true,
    rating: 4.4,
    brand: "UrbanPack",
    description:
      "Water-resistant laptop backpack with USB charging port and 15-inch laptop compartment.",
    images: ["https://example.com/images/backpack1.jpg"],
  },
  {
    id: 11,
    name: "Curved Gaming Monitor 27-inch",
    category: "Computers",
    price: 299.99,
    in_stock: true,
    rating: 4.9,
    brand: "GameView",
    description:
      "144Hz curved gaming monitor with 1ms response time and HDR support.",
    images: ["https://example.com/images/monitor1.jpg"],
  },
  {
    id: 12,
    name: "Smart LED Bulb 10W",
    category: "Smart Devices",
    price: 14.99,
    in_stock: true,
    rating: 4.0,
    brand: "BrightHome",
    description:
      "Wi-Fi enabled LED bulb with color control via mobile app and voice assistants.",
    images: ["https://example.com/images/bulb1.jpg"],
  },
  {
    id: 13,
    name: "Electric Toothbrush",
    category: "Personal Care",
    price: 39.99,
    in_stock: true,
    rating: 4.3,
    brand: "SmilePro",
    description:
      "Rechargeable sonic toothbrush with 3 brushing modes and 2-minute timer.",
    images: ["https://example.com/images/toothbrush1.jpg"],
  },
  {
    id: 14,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    in_stock: true,
    rating: 4.5,
    brand: "BeatBox",
    description:
      "Compact waterproof speaker with deep bass and 12 hours of playtime.",
    images: ["https://example.com/images/bluetoothspeaker1.jpg"],
  },
  {
    id: 15,
    name: "Smartphone Gimbal Stabilizer",
    category: "Accessories",
    price: 109.99,
    in_stock: false,
    rating: 4.6,
    brand: "SteadyCam",
    description: "3-axis handheld gimbal for cinematic video stabilization.",
    images: ["https://example.com/images/gimbal1.jpg"],
  },
  {
    id: 16,
    name: "Electric Kettle 1.5L",
    category: "Home Appliances",
    price: 29.99,
    in_stock: true,
    rating: 4.2,
    brand: "HeatEase",
    description:
      "Fast boiling stainless steel electric kettle with auto shut-off feature.",
    images: ["https://example.com/images/kettle1.jpg"],
  },
  {
    id: 17,
    name: "Robot Vacuum Cleaner",
    category: "Home Appliances",
    price: 249.99,
    in_stock: true,
    rating: 4.5,
    brand: "CleanBot",
    description:
      "Smart robot vacuum with Wi-Fi connectivity and automatic charging dock.",
    images: ["https://example.com/images/vacuum1.jpg"],
  },
  {
    id: 18,
    name: "Wireless Charger Pad",
    category: "Accessories",
    price: 19.99,
    in_stock: true,
    rating: 4.3,
    brand: "ChargeIt",
    description:
      "Fast wireless charging pad compatible with iPhone and Android devices.",
    images: ["https://example.com/images/charger1.jpg"],
  },
  {
    id: 19,
    name: "Noise Cancelling Mic",
    category: "Computers",
    price: 59.99,
    in_stock: true,
    rating: 4.4,
    brand: "ClearTalk",
    description:
      "USB condenser microphone with background noise reduction for streaming and meetings.",
    images: ["https://example.com/images/mic1.jpg"],
  },
  {
    id: 20,
    name: "Smart Door Lock",
    category: "Smart Devices",
    price: 189.99,
    in_stock: false,
    rating: 4.6,
    brand: "SafeLock",
    description:
      "Keyless entry smart door lock with fingerprint and app control.",
    images: ["https://example.com/images/lock1.jpg"],
  },
  {
    id: 21,
    name: "Smart Thermostat",
    category: "Smart Devices",
    price: 199.99,
    in_stock: true,
    rating: 4.8,
    brand: "EcoTemp",
    description:
      "Wi-Fi thermostat that learns your schedule to optimize heating and cooling.",
    images: ["https://example.com/images/thermostat1.jpg"],
  },
  {
    id: 22,
    name: "LED Desk Lamp",
    category: "Home Appliances",
    price: 34.99,
    in_stock: true,
    rating: 4.3,
    brand: "LightEase",
    description:
      "Adjustable LED desk lamp with dimmable touch controls and USB charging port.",
    images: ["https://example.com/images/lamps1.jpg"],
  },
  {
    id: 23,
    name: "Action Camera 4K",
    category: "Electronics",
    price: 159.99,
    in_stock: true,
    rating: 4.4,
    brand: "GoVision",
    description:
      "Waterproof 4K action camera with Wi-Fi and 120-degree wide-angle lens.",
    images: ["https://example.com/images/actioncam1.jpg"],
  },
  {
    id: 24,
    name: "Smart Plug 2-Pack",
    category: "Smart Devices",
    price: 24.99,
    in_stock: true,
    rating: 4.2,
    brand: "PlugIt",
    description:
      "Control home devices remotely with these voice assistant compatible smart plugs.",
    images: ["https://example.com/images/plug1.jpg"],
  },
  {
    id: 25,
    name: "Laptop Cooling Pad",
    category: "Computers",
    price: 32.99,
    in_stock: true,
    rating: 4.3,
    brand: "CoolZone",
    description:
      "Laptop cooling pad with dual silent fans and adjustable height settings.",
    images: ["https://example.com/images/cooler1.jpg"],
  },
  {
    id: 26,
    name: "Wireless Presenter Remote",
    category: "Accessories",
    price: 22.99,
    in_stock: false,
    rating: 4.0,
    brand: "PointPro",
    description:
      "Wireless presentation remote with laser pointer and long range receiver.",
    images: ["https://example.com/images/remote1.jpg"],
  },
  {
    id: 27,
    name: "HD Webcam 1080p",
    category: "Computers",
    price: 49.99,
    in_stock: true,
    rating: 4.4,
    brand: "StreamCam",
    description: "Full HD webcam with built-in microphone and privacy shutter.",
    images: ["https://example.com/images/webcam1.jpg"],
  },
  {
    id: 28,
    name: "Electric Hair Trimmer",
    category: "Personal Care",
    price: 39.5,
    in_stock: true,
    rating: 4.1,
    brand: "TrimPro",
    description:
      "Cordless rechargeable trimmer with precision blades for beard and hair.",
    images: ["https://example.com/images/trimmer1.jpg"],
  },
  {
    id: 29,
    name: "USB-C Hub 6-in-1",
    category: "Computers",
    price: 49.0,
    in_stock: true,
    rating: 4.5,
    brand: "HubLink",
    description:
      "Multiport USB-C hub with HDMI, SD card, USB 3.0, and Ethernet ports.",
    images: ["https://example.com/images/hub1.jpg"],
  },
  {
    id: 30,
    name: "Portable Power Bank 20000mAh",
    category: "Electronics",
    price: 39.99,
    in_stock: true,
    rating: 4.6,
    brand: "ChargeGo",
    description:
      "High-capacity portable power bank with dual USB output and fast charging.",
    images: ["https://example.com/images/powerbank1.jpg"],
  },
];

//? Output => [{ name: "Phone" }, { name: "Smart Watch" }]

//* Process
//TODO Filter => Electronics
//TODO Sort by => Rating
//TODO Slice => first 3 (top 3)
//TODO Map => transform object shape to { name : "Name"}

// better comment extension

const topElectronicProduct = rawApiData
  .filter((product) => product.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item) => {
    return { name: item.name };
  });
console.log(topElectronicProduct);
