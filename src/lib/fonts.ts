import local from 'next/font/local'

export const robotoFont = local({
    src: [
        {
            path: '../../public/fonts/Roboto/Light.ttf',
            weight: '300',
        },
        {
            path: '../../public/fonts/Roboto/Regular.ttf',
            weight: '400',
        },
        {
            path: '../../public/fonts/Roboto/Medium.ttf',
            weight: '500',
        },
        {
            path: '../../public/fonts/Roboto/Bold.ttf',
            weight: '700',
        },
    ],
    variable: '--font-roboto',
})
