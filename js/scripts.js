const img1 = document.getElementById('imagen1')
const img2 = document.getElementById('imagen2')

const loadImage = (entrys, observator) => {

    console.log(entrys)

    entrys.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('visible')
        }
    })
}

const observer = new IntersectionObserver(loadImage, {
    root: null,
    rootMargin: '500px 0px 100px 0px',
    threshold: 0.6
})

observer.observe(img1)
observer.observe(img2)