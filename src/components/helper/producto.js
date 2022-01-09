const producto = [
  {
    id: 1,
    nombre: "Zapatilla",
    precio: "2000",
    stock: "50",
    key: "1",
  },
  {
    id: 2,
    nombre: "Remera",
    precio: "1000",
    stock: "80",
    key: "2",
  },
  {
    id: 3,
    nombre: "Bermuda",
    precio: "1500",
    stock: "40",
    key: "3",
  },
  {
    id: 4,
    nombre: "Camisa",
    precio: "2500",
    stock: "50",
    key: "4",
  },
  {
    id: 5,
    nombre: "Campera",
    precio: "6000",
    stock: "30",
    key: "5",
  },
  {
    id: 6,
    nombre: "Buzo",
    precio: "4000",
    stock: "50",
    key: "6",
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