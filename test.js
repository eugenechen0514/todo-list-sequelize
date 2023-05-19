try {
    new Promise(() => {
        throw new Error('fake error');
    })
    .catch(e => {
        console.error('rejected promise handler', e)
    })
} catch(e) {
    console.error('catch exception handler', e)
}

