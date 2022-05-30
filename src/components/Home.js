import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import List from './List'

export default function Home() {

    const [data, setData] = useState([])
    const [userName, setuserName] = useState('')
    const [error, seterror] = useState(false)
    // useEffect(() => {
    //     axios(url)
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })

    // }, [])

    const formHandler = (event) => {
        event.preventDefault()

        axios(`https://api.github.com/users/${userName}/repos`)
            .then((data) => {
                console.log(data)
                setData(data)

                if (data.data.length < 1) {
                    seterror(true)

                } else {
                    seterror(false)
                }
            })
            .catch((err) => {
                console.log(err)
                setData([])
                seterror(true)
            })



    }

    const inputHandler = (event) => {

        setuserName(event.target.value)
    }

    const checkboxHandler = (event) => {
        let newArr = []
        console.log(event.target.checked)
        if (event.target.checked) {
            newArr = data.filter((val) => val.fork == true)
            setData(newArr)
        } else {
            newArr = data.filter((val) => val.fork == false)
            setData(newArr)
        }




    }





    return (
        <div>
            <form onSubmit={formHandler}>
                <label htmlFor='userName'>Github Username</label>
                <input id='userName' onChange={inputHandler} />
                <label htmlFor='checkbox'>Include fork</label>
                <input type="checkbox" id='fork' onChange={checkboxHandler} />
                <button>Submit</button>
            </form>
            {error ? <h3>not found</h3> : <List data={data} />}



        </div>
    )
}
