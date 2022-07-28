//array Números
const arrayNumbers = [9,5,7,6,4,8,1,0]

//array String
const arrayString = ["Arthur","Matheus","Prado"]

//array Booleanos
const arrayBooleanos = ["Arthur",26,true]


//OS ARRAYS ABAIXO SÃO COPIAS DOS ORIGINAIS

const arrayNumbersCoppy = arrayNumbers.slice()
    arrayNumbersCoppy.push(10)
        console.log(arrayNumbers, arrayNumbersCoppy)


const arrayStringCoppy = arrayString.slice()
    arrayStringCoppy.pop()
        console.log(arrayString, arrayStringCoppy)
    

const arrayBooleanosCoppy = arrayBooleanos.slice()
    arrayBooleanosCoppy.splice(1,1)
        console.log(arrayBooleanos, arrayBooleanosCoppy)
