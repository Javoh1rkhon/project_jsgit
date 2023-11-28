let add = document.querySelector('#add')
let content = document.querySelector('.content')


// add.addEventListener('click', () => {
//     let h1 = document.createElement('h1')
//     h1.innerText = `SALOM ${counter}`
//     content.appendChild(h1)

//     counter++
//     console.log(h1);
// })

let counter = 1

let img = [
    'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqU7gf8jJ5bWsbyg6UuKyr1-ZNW5KqP_3oA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKZQeAX59UwPGojw76ftVf1rPT-FBLZnWaA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpGEpcbgN3Qe2CcZX-QjQ-vWiqaMQyIhwLg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOK-mkJTyqzoMO9Q7QVh7MF9wHyZGdppB_g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6F5PIexyb6uBT6ryS2nHOtw4zy3gFCYiJg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYfpw7SAaqRvv11MSWx4q1ENRhEWfulX6iw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHVSXZHqDZSqohmxayyzGeuMN9q-DiCuU9g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUcfWTEs7ygYpn7_gNVtDItWXQyGbVyjweQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM73rY6IuqEA0U7pwZAsiFLNQeZAu4umzM_Q&usqp=CAU',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkssvxDZfBv9wh6dsiuwsJP0F5B5LEbM1zdw&usqp=CAU",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchwOyDdJdD8wNa5obv3uk3l4d71qfkWO9Nsqxmo-dVhJRswpOk51euzbyaKtG_VzXfcg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUeKyt3wC19KNzIbxnme-H4T13dP0HoGzuw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiy_G3cvFY27GpZ_SSKcx6pxberf94qOF2hQ&usqp=CAU'
]

add.addEventListener('click', () => {
let rnd = Math.floor(Math.random() * img.length)

    let box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = counter
    box.style.backgroundImage = `url(${img[rnd]})`
    content.appendChild(box)

    console.log(box);
    counter++
})