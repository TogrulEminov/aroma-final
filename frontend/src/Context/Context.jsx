import { useState } from "react";
import { createContext } from "react";
import axios from "axios"
import { useEffect } from "react";

export const mainContext = createContext(null)

function Context({ children }) {
    const url = "http://localhost:8080/product"
    const [data, setData] = useState(null)
    const [search, setSearch] = useState("")
    const [state, setState] = useState({
        name: "",
        price: '',
        mark: "",
        url: ''
    })
    const [open, setOpen] = useState(false)
    const [sorted, setSorted] = useState({ sorted: "price", reversed: false })

    const getData = async () => {
        const respnse = await axios.get(url)
        setData(respnse.data)
    }
    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }
    const postData = async () => {
        if (!state.name || !state.price || !state.mark || !state.url) return
        await axios.post(url, state)
        setState({
            name: "",
            price: '',
            mark: "",
            url: ''
        })
        getData()
    }

    const searchData = (e) => {
        setSearch(e.target.value)
    }

    const delData = (index) => {
        axios.delete(`http://localhost:8080/product/${index}`)
    }

    const sortData = () => {
        setSorted(!sorted.reversed)
        const dataCopy = [...data]
        dataCopy.sort((a, b) => {
            if (sorted.reversed) {
                return a.price - b.price
            }
            return b.price - a.price
        })
        setData(dataCopy)
    }
    const openInput = () => {
        setOpen(!open)
    }
    const values = {
        open, search, state, handleChange, sortData, delData, data, searchData, postData, openInput
    }
    return (
        <mainContext.Provider value={values} >
            {children}
        </mainContext.Provider>
    )
}
export default Context