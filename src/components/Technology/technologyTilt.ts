type TiltOptions = {
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    easing?: string;
}

export const TechnologyTilt = (className: string, options: TiltOptions) => {
    const tiltSettings = {
        max: (options.max === undefined) ? 15 : options.max,
        perspective: (options.perspective === undefined) ? 300 : options.perspective,
        scale: (options.scale === undefined) ? 1 : options.scale,
        speed: (options.speed === undefined) ? 300 : options.speed,
        easing: 'cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    }

    const { max, perspective, scale, speed, easing } = tiltSettings;

    const technologyItems = document.querySelectorAll(`.${className}`)

    const ItemMouseEnter = async (event: any) => setTransition(event)

    const ItemMouseMove = async (event: any) => {
        const item = event.currentTarget
        const coords = item.getBoundingClientRect()
        const itemWidth = item.offsetWidth
        const itemHeight = item.offsetHeight
        const centerX = coords.left + itemWidth / 2
        const centerY = coords.top + itemHeight / 2
        const mouseX = event.clientX - centerX
        const mouseY = event.clientY - centerY
        const rotateXUncapped = (-1) * max * mouseY / (itemHeight / 2)
        const rotateYUncapped = (+1) * max * mouseX / (itemWidth / 2)
        const rotateX = (rotateXUncapped < -max) ? -max : ((rotateXUncapped > max) ? max : rotateXUncapped)
        const rotateY = (rotateYUncapped < -max) ? -max : ((rotateYUncapped > max) ? max : rotateYUncapped)

        item.style.transform = `
            perspective(${perspective}px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale3d(${scale}, ${scale}, ${scale})
        `
    }

    const ItemMouseLeave = async (event: any) => {
        event.currentTarget.style.transform = `
            perspective(${perspective}px) 
            rotateX(0deg) 
            rotateY(0deg) 
            scale3d(1, 1, 1)
        `
        setTransition(event)
    }

    technologyItems.forEach(item => {
        item.addEventListener("mousemove", ItemMouseMove)
        item.addEventListener("mouseleave", ItemMouseLeave)
        item.addEventListener("mouseenter", ItemMouseEnter)
    })

    const setTransition = async (event: any) => {
        const item = event.currentTarget
        clearTimeout(item.transition_timeout)
        item.style.transition = `transform ${speed}ms ${easing}`
        item.transition_timeout = setTimeout(() => item.style.transition = ``, 300)
    }
}