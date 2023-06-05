// import all images from assets/images directory
import img01 from "../all-images/cars-img/Toyota-Allion.jpg";
import img02 from "../all-images/cars-img/Toyota Corolla Axio.jpg";
import img03 from "../all-images/cars-img/Toyota Prado TX.png";
import img04 from "../all-images/cars-img/toyota fielder.jpg";
import img05 from "../all-images/cars-img/Toyota_RAV4_Hybrid.jpg";
import img06 from "../all-images/cars-img/Nissan X-Trail.jpg";
import img07 from "../all-images/cars-img/Subaru Forester.png";
import img08 from "../all-images/cars-img/Noah.gif";
import img09 from "../all-images/cars-img/Nissan Urvan.jpg";

const carData = [
  {
    id: 1,
    brand: "Toyota ",
    rating: 112,
    carName: "Toyota Allion",
    imgUrl: img01,
    model: "Model-2019/21",
    price: 4000,
    speed: "180 km/hr",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Discover the Toyota Allion, a sedan that combines elegance, comfort, and advanced features in a compact package. Experience the pleasure of driving a reliable and sophisticated vehicle that effortlessly fits into your lifestyle. With its stylish design and practicality, the Toyota Allion is ready to elevate your driving experience to new heights.Equipped with modern technology, the Toyota Allion keeps you connected and entertained on the road. The intuitive infotainment system offers seamless smartphone integration, allowing you to access your favorite apps and music effortlessly. Advanced safety features provide peace of mind, prioritizing your well-being and enhancing your confidence behind the wheel.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Corolla Axio",
    imgUrl: img02,
    model: "Model-2017",
    price: 3500,
    speed: "180 km/hr",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Discover the Toyota Axio, a compact sedan that offers a perfect blend of style, comfort, and reliability. With its sleek design, spacious interior, and advanced features, the Axio is the ideal companion for both urban commutes and long drives. Experience smooth performance, exceptional fuel efficiency, and the peace of mind that comes with Toyota's renowned safety standards. Get behind the wheel of the Toyota Axio and elevate your driving experience to new heights.",
  },

  {
    id: 3,
    brand: "Toyota",
    rating: 132,
    carName: "Toyota Prado TX",
    imgUrl: img03,
    model: "Model-2019/20",
    price: 13000,
    speed: "180 km/h.",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Introducing the Prado TX, the epitome of rugged elegance and off-road capability. Designed to conquer any terrain, this powerful SUV is built to withstand the toughest challenges while offering a refined and luxurious driving experience.With its distinctive and bold exterior, the Prado TX commands attention wherever it goes. Stay connected and entertained with the intuitive infotainment system, while the advanced driver-assist technologies provide an extra layer of safety and confidence on the road.",
  },

  {
    id: 4,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Fielder",
    imgUrl: img04,
    model: "Model-2022",
    price: 4000,
    speed: "100 km/hr",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Introducing the Toyota Fielder, a dynamic and practical wagon that combines versatility, efficiency, and style. With its spacious interior, fuel-efficient performance, and modern features, the Fielder is the perfect choice for those seeking a reliable and comfortable driving experience.The Toyota Fielder features a sleek and streamlined exterior design, capturing attention with its contemporary lines and aerodynamic profile. Its elegant front grille and stylish headlights add a touch of sophistication, while the well-defined contours exude a sense of strength and agility.With its efficient engine and smart engineering, the Toyota Fielder delivers impressive fuel economy without compromising on performance. Whether navigating city streets or cruising on the highway, this wagon provides a smooth and responsive driving experience, making every journey a pleasure.",
  },

  {
    id: 5,
    brand: "Toyota",
    rating: 94,
    carName: "Toyoyta RA4",
    imgUrl: img05,
    model: "Model-2017/19",
    price: 4000,
    speed: "135 km/hr",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Toyota RAV4 stands out with its rugged yet refined exterior, featuring sharp lines and a distinctive front grille that commands attention on the road. Its muscular stance and athletic profile exude a sense of strength and capability. Whether you're navigating urban streets or exploring the great outdoors, the RAV4 is ready to make a statement.Advanced safety features, including Toyota Safety Sense, offer peace of mind by enhancing your awareness and protection on the road.With its responsive handling, strong acceleration, and available all-wheel drive, this SUV offers a thrilling and confident driving experience, no matter the road conditions. The Toyota RAV4 is ready to accompany you on your next adventure, wherever it may take you.",
  },

  {
    id: 6,
    brand: "Nissan",
    rating: 119,
    carName: "Nissan X-Trail",
    imgUrl: img06,
    model: "Model-2017/22",
    price: 5000,
    speed: "170kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Discover the Nissan X-Trail, an SUV that combines style, versatility, and capability in a seamless package. Experience the thrill of exploring both the urban landscape and the great outdoors, while enjoying the comfort, technology, and reliability that Nissan is known for.The X-Trail provides ample legroom and flexible seating configurations, accommodating the needs of growing families and active lifestyles. Thoughtful details, premium materials, and advanced features create a welcoming and functional environment.The Nissan X-Trail is ready to accompany you on your next adventure, no matter where it leads.",
  },

  {
    id: 7,
    brand: "Subaru",
    rating: 82,
    carName: "Subaru Forester",
    imgUrl: img07,
    model: "Model-2019",
    price: 5000,
    speed: "193 km/hr",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Subaru Forester commands attention with its bold and athletic exterior. Its muscular body, raised ground clearance, and iconic hexagonal grille create a rugged and adventurous look that hints at its off-road capabilities. Designed to tackle any terrain, the Forester is the perfect companion for outdoor enthusiasts and urban explorers alike.The Subaru Forester delivers impressive performance and capability, thanks to its renowned Symmetrical All-Wheel Drive system and efficient engines. Whether you're navigating city streets or venturing off the beaten path, the Forester offers a smooth and engaging driving experience, allowing you to conquer any road or trail with ease.",
  },

  {
    id: 8,
    brand: "Toyota",
    rating: 52,
    carName: "Toyota Noah",
    imgUrl: img08,
    model: "Model-2014",
    price: 6500,
    speed: "175 km/hr",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Toyota Noah boasts a sleek and contemporary exterior, featuring clean lines and a well-proportioned body. Its aerodynamic shape not only enhances fuel efficiency but also exudes a sense of elegance and sophistication. With its refined styling and attention to detail, the Noah stands out as a practical yet stylish choice for families on the go.The Noah offers ample space for passengers and cargo, making it an ideal choice for growing families or those seeking versatility. The seats are designed with ergonomics in mind, providing excellent support and ensuring a comfortable ride for everyone. Thoughtful storage solutions and cleverly placed compartments further enhance convenience.The Noah's responsive handling and impressive fuel economy make it a practical choice for both daily commutes and longer trips.",
  },
  
  {
    id: 9,
    brand: "Nissan",
    rating: 52,
    carName: "Nissan Urvan",
    imgUrl: img09,
    model: "Model-2017/19",
    price: 8500,
    speed: "120km/hr",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Introducing the Nissan Urvan, a reliable and spacious van designed to meet the needs of businesses and individuals alike. With its practicality, versatility, and comfortable interior, the Urvan is the perfect choice for transportation and cargo needs.A van that combines functionality, versatility, and reliability in one package. Experience the convenience and comfort it offers, making it the ideal choice for business endeavors, group travels, or any transportation needs. Unlock the potential of the Nissan Urvan and elevate your driving experience to new heights.",
  },

];

export default carData;