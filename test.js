// try {
//     new Promise(() => {
//         throw new Error('fake error');
//     })
//     .catch(e => {
//         console.error('rejected promise handler', e)
//     })
// } catch(e) {
//     console.error('catch exception handler', e)
// }

// try {
//     //Promise.reject(new Error('fake error'))
//     Promise.reject(new Error('fake error'))
//     console.error('no error')
// } catch(e) {
//     console.error('catch exception handler', e)
// }



// try {
//     //Promise.reject(new Error('fake error'))
//     throw Promise.reject(new Error('fake error'))
//     console.error('no error')
// } catch(e) {
//     console.error('catch exception handler', e)
// }

// try {
//     // case 1
//     Promise.reject(new Error('fake error'))

//     // case 2
//     // throw Promise.reject(new Error('fake error'))

//     // case 3
//     // throw {msg: 'msg'}

//     // case 4
//     // throw 'msg'

//     // case 5
//     // throw new Error('msg')
    
//     console.error('no error')
// } catch(e) {
//     console.log('catch exception handler')
//     console.log(e)
// }

// try {
//     new Promise(() => {
// 	    throw new Error('fake error')
//     })
//     .catch(e => {
//       console.error('rejected promise handler', e)
//     })
// 		.then(() => {
// 			console.log('hi')
// 		})
// } catch(e) {
//     console.error('catch exception handler', e)
// }

// process.on('uncaughtException', (err) => {
//     console.log('handling', err)
// })

setInterval(() => {
    console.log('hi')
},1000)

throw new Error('fake error')


