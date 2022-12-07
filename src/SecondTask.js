import { Button } from '@cedcommerce/ounce-ui'
import React from 'react'

export default function SecondTask() {

    let person = {
        name: {
            firstName: {
                firstName_first: 'vish',
                firstName_second: 'al',
            },
            lastName: 'singh',
        },
        company: {
            previousCompany: ['Flipkart', 'Microsoft'],
            currentCompany: 'cedcoss',
            nextCompanies: ['Meta', 'Google']
        },
        age: 25,
        skills: ['React', 'php'],
    }

    // const showResult = (myObj) => {
    //     // debugger
    //     let finalObject = {}
    //     let keyArray = [...keys]
    //     let values = null
    //     Object.entries(myObj).forEach((item) => {
    //         const [key, value] = item
    //         if(typeof value === 'object' && Array.isArray(value) === false) {

    //         }
    //         else {
    //             keyArray.push(key)
    //             values = value
    //         }
    //         finalObject[keyArray.toString()] = values
    //     })
    //     // keyArray=[]
    //     // console.log('final')


    //     console.log(finalObject)
    // }

    const iterateData = (myObj) => {
        let finalObject = {}
        Object.entries(myObj).map((item) => {
            const [key, value] = item
            if (typeof value === 'object' && Array.isArray(value) === false) {
                let temp = iterateData(value)
                // console.log("temp", temp)
                Object.entries(temp).map((item2) => {
                    const [k, v] = item2
                    finalObject[`${key}.${k}`] = v
                })
            }
            else {
                finalObject[key] = value
            }
        })
        return finalObject
    }

    return (
        <div className='second-container'>
            <Button onClick={() => {
                let t = iterateData(person)
                console.log(t)
            }}>Display Results in Console</Button>
        </div>
    )
}
