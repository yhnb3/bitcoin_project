export const apiCall = async () => {
    const url = "http://localhost:3000"
    try {
        const newData = await fetch(url + "/account")
            .then( async (res) => {
                return await res.json()
            })
        return newData
    } catch {
        console.log("무슨 문제가 생겼습니다.")
    }
}
    



