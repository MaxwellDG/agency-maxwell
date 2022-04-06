import AllIcons from './icon-svgs'

export const getIcon = (text) => {
    const s = text.split('-')
    let final = s.map(j => {
        let char = j.substring(0, 1)
        char = char.toUpperCase();
        return char + j.substring(1, j.length)
    })
    let finalStr = final.join('')
    return AllIcons[finalStr]
}