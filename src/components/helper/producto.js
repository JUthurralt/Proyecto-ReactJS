const producto = [
  {
    id: "1",
    nombre: "Ozweego",
    marca: "adidas",
    precio: "16.699",
    stock: "50",
    key: "1",
    img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw43de390c/products/AD_EG6724/AD_EG6724-1.JPG"
  },
  {
    id: "2",
    nombre: "Air Force 1´07 Lx",
    marca: "nike",
    precio: "19.499",
    stock: "80",
    key: "2",
    img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa3a49705/products/NI_CZ0268-300/NI_CZ0268-300-1.JPG"
  },
  {
    id: "3",
    nombre: "Rs-Fast Buck",
    marca: "puma",
    precio: "17.599",
    stock: "40",
    key: "3",
    img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw765491b2/products/PU_381037-01/PU_381037-01-1.JPG"
  },
  {
    id: "4",
    nombre: "U Ultrarange Exo",
    marca: "vans",
    precio: "19.299",
    stock: "50",
    key: "4",
    img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw29bc0239/products/VA_VN0A4U1KBLK1/VA_VN0A4U1KBLK1-1.JPG"
  },
  {
    id: "5",
    nombre: "Air Force 1 '07 Se",
    marca: "nike",
    precio: "21.499",
    stock: "30",
    key: "5",
    img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5b077b33/products/NI_CZ0269-101/NI_CZ0269-101-1.JPG"
  },
  {
    id: "6",
    nombre: "Air Force 1 Crater",
    marca: "nike",
    precio: "21.499",
    stock: "50",
    key: "6",
    img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf76c8360/products/NI_CT1986-001/NI_CT1986-001-1.JPG"
  },
];

export const promesa = new Promise ((resolve, reject) =>{
    let respuesta = true
    if(respuesta){
        setTimeout (()=>{ 
            resolve(producto);
        },2000)
        
    }else{
        reject('error')
    }
})