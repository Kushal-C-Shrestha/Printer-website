function imageSlider() {
    const firstImage = document.querySelector("#img1");
    const secondImage = document.querySelector("#img2");
    if (firstImage.style.display == "flex") {
      firstImage.style.display = "none";
      secondImage.style.display = "flex";
    } else {
      firstImage.style.display = "flex";
      secondImage.style.display = "none";
    }
  }
  setInterval(imageSlider, 3000);


//creating data for the website.
const products=[
    {
        name:"Brother HL-B2000D",
        category:"Laser",
        output:"bw",
        price:24999,
        brand:"Brother",
        description:"Cost Effective Single Function Printer,Automatic 2-sided Printing",
        image:"/images/brother-printer-1.png"
    },
    {
        name:"Brother MFC-L3735CDN",
        category:"Laser",
        output:"color",
        price:70999,
        brand:"Brother",
        description:"Network Colour LED All-in-One, Duplex Mobile Print ADF",
        image:"/images/brother-printer-2.png"
    },
    {
        name:"Brother DCP-T820DW",
        category:"Ink Jet",
        output:"color",
        price:35000,
        brand:"Brother",
        description:"Business savings with duplex, high-speed multifunction printer",
        image:"/images/brother-printer-3.png"
    },
    {
        name:"Brother QL-800",
        category:"Thermal",
        output:"bw",
        price:38000,
        brand:"Brother",
        description:"High Speed Professional Label Printer",
        image:"/images/brother-printer-4.png"
    },
    {
        name:"HP OfficeJet Pro 9015e",
        category:"Ink Jet",
        output:"color",
        price:40000,
        brand:"HP",
        description:"All-in-One Printer w/ bonus 6 months Instant Ink through HP+",
        image:"/images/hp-printer-1.png"
    },
    {
        name:"HP Color LaserJet Pro MFP 4301fdw",
        category:"Laser",
        output:"color",
        price:90999,
        brand:"HP",
        description:"Blazing fast speed for professional quality prints.",
        image:"/images/hp-printer-2.png"
    },
    {
        name:"HP Smart Tank 7602",
        category:"Ink Jet",
        output:"color",
        price:60000,
        brand:"HP",
        description:"All-in-One,Cost-effective,Best quality prints.",
        image:"/images/hp-printer-3.png"
    },
    {
        name:"HP LaserJet Pro 4001dw",
        category:"Laser",
        output:"bw",
        price:50000,
        brand:"HP",
        description:"Wireless, blazing fast speed for professional black & white prints.",
        image:"/images/hp-printer-4.png"
    },
    {
        name:"Epson OmniLink TM-m50IIH",
        category:"Thermal",
        output:"bw",
        price:32000,
        brand:"Epson",
        description:"POS Thermal Receipt Printer, fast, compact and modern.",
        image:"/images/epson-printer-1.png"
    },
    {
        name:"Epson EcoTank L14150",
        category:"Ink Jet",
        output:"color",
        price:69000,
        brand:"Epson",
        description:"Wi-Fi Duplex Wide-Format All-in-One Ink Tank Printer",
        image:"/images/epson-printer-2.png"
    },
    {
        name:"Epson Ecotank M1170",
        category:"Ink Jet",
        output:"bw",
        price:29000,
        brand:"Epson",
        description:"Wi-Fi InkTank Printer, Cost-effective, Fast, Quality prints",
        image:"/images/epson-printer-3.png"
    },
    {
        name:"Epson AcuLaser CX37DN",
        category:"Laser",
        output:"bw",
        price:30000,
        brand:"Epson",
        description:"Feature-packed all-in-one A4 color laser printer",
        image:"/images/epson-printer-4.png"
    },
    {
        name:"Samsung Xpress SL-M2060W ",
        category:"Ink Jet",
        output:"bw",
        price:18000,
        brand:"Samsung",
        description:"Multi-function WiFi Monochrome Inkjet Printer ",
        image:"/images/samsung-printer-1.png"
    },
    {
        name:"Samsung ProXpress C3060W",
        category:"Laser",
        output:"color",
        price:71500,
        brand:"Samsung",
        description:"Wireless Multifunction Color Laser Printer",
        image:"/images/samsung-printer-2.png"
    },
    {
        name:"Samsung SCX 3401/XIP ",
        category:"Laser",
        output:"bw",
        price:15000,
        brand:"Samsung",
        description:"Multi-function Monochrome Laser Printer  (Grey, Toner Cartridge)",
        image:"/images/samsung-printer-3.png"
    },
    {
        name:"Samsung SL-M2876ND",
        category:"Laser",
        output:"bw",
        price:28000,
        brand:"Samsung",
        description:"Multi-function Monochrome Laser Printer  (White, Toner Cartridge)",
        image:"/images/samsung-printer-4.png"
    },
    {
        name:"Canon ImageClass MF441dw",
        category:"Laser",
        output:"color",
        price:115000,
        brand:"Canon",
        description:"Reliable, 3-in-1 multifunctional monochrome printer",
        image:"/images/canon-printer-2.png"
    },
    {
        name:"Canon Pixma G3730",
        category:"Ink Jet",
        output:"color",
        price:25999,
        brand:"Canon",
        description:"All-in-one Wireless Inktank Printer with Small Size Ink Bottles",
        image:"/images/canon-printer-3.png"
    },
    {
        name:"Canon Pixma E470 ",
        category:"Ink Jet",
        output:"color",
        price:12500,
        brand:"Canon",
        description:"Affordable All-in-one with Wi-Fi connectivity",
        image:"/images/canon-printer-4.png"
    },
    {
        name:"Canon SELPHY CP1500 ",
        category:"Thermal",
        output:"color",
        price:20000,
        brand:"Canon",
        description:"Compact Photo Printer, multi-device connectivity",
        image:"/images/canon-printer-5.png"
    },
];

// Creating a function to display all the details 
let mainProductContainer=document.querySelector(".main-products-container");

function display(listOfProducts){
    debugger;
    mainProductContainer.innerHTML="";
    for (let i=0;i<listOfProducts.length;i++){
        mainProductContainer.innerHTML +=`
        <div class="product-card">
          <div class="product-card-contents" onclick="window.location.href='singleProduct.html'" >
            <img src="${listOfProducts[i].image}" alt="" />
            <p class="product-card-name">${listOfProducts[i].name}</p>
            <p class="product-card-desc">${listOfProducts[i].description}</p>
            <p class="product-card-price" style="color:rgb(195, 19, 19)">Rs. ${listOfProducts[i].price}</p>
          </div>
          <button class="product-card-button" onclick="alert('Added to cart Successfully!')">Add to cart</button>
        </div>  
        `;
    }
};

//Calling the function so the products will be displayed with the page.
display(products);

let productsCategory=[];
let filteredProducts=[];

//Creating a function to filter the products according to category
function filterCategory(category){
    filteredProducts=[];
    debugger;
    if (productsCategory.includes(category)){
        productsCategory.splice(productsCategory.indexOf(category),1);
    }
    else{
        productsCategory.push(category);
    }
    
    for (let product of products){
        if (productsCategory.includes(product.category)){
            filteredProducts.push(product);
        }
    }
    
    if (filteredProducts.length===0){
        display(products);
    }
    else{
        display(filteredProducts);
    }
}

let productsOutput=[];
//Creating a function to filter the products according to output
function filterOutput(output){
    filteredProducts=[];
    debugger;
    if (productsOutput.includes(output)){
        productsOutput.splice(productsOutput.indexOf(output),1);
    }
    else{
        productsOutput.push(output);
    }
    
    for (let product of products){
        if (productsOutput.includes(product.output)){
            filteredProducts.push(product);
        }
    }
    
    if (filteredProducts.length===0){
        display(products);
    }
    else{
        display(filteredProducts);
    }
}

let productsBrand=[];
//Creating a function to filter the products according to brand
function filterBrand(brand){
    filteredProducts=[];
    debugger;
    if (productsBrand.includes(brand)){
        productsBrand.splice(productsBrand.indexOf(brand),1);
    }
    else{
        productsBrand.push(brand);
    }
    
    for (let product of products){
        if (productsBrand.includes(product.brand)){
            filteredProducts.push(product);
        }
    }
    if (filteredProducts.length===0){
        display(products);
    }
    else{
        display(filteredProducts);
    }
}
