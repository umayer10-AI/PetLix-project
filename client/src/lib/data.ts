export const UserData = async() => {
    const res = await fetch(`http://localhost:5000/user`)
    return res.json()
}

export const UserIDData = async (id) => {
    const res = await fetch(`http://localhost:5000/user/${id}`)
    return res.json()
}