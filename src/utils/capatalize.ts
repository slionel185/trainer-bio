const capatalize = (str: string) => {
    let lower = str.toLowerCase()
    let capatal = `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`

    return capatal
}

export default capatalize