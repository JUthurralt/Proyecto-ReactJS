const producto = [
  {
    id: 1,
    nombre: "Zapatilla",
    precio: "2000",
    description: "Billetera de cuero negro",
    reference: "REF-005",
    key: "1",
  },
  {
    id: 2,
    nombre: "Remera",
    description: "Billetera de cuero negro",
    precio: "1000",
    reference: "REF-005",
    key: "2",
  },
  {
    id: 3,
    nombre: "Bermuda",
    precio: "1500",
    description: "Billetera de cuero negro",
    reference: "REF-005",
    key: "3",
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