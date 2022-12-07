import { Card, FormElement, TextField } from '@cedcommerce/ounce-ui'
import React, { useState } from 'react'

interface credentials {
    userName: any;
    password: any;
}

interface errorInterface {
    status: boolean,
    field: string,
    message: string
}

export default function Home() {

    const [errorFlag, setErrorFlag] = useState<errorInterface>({
        status: false,
        field: '',
        message: ''
    })

    const [loginDetails, setLoginDetails] = useState<credentials>({
        userName: '',
        password: ''
    })

    const onChangeHandler = (value: string, field: string) => {
        setLoginDetails({ ...loginDetails, [field]: value })
    }

    const submitForm = () => {
        var tempObj = {
            status: false,
            field: '',
            message: ''
        }
        Object.entries(loginDetails).forEach((item) => {
            if (item[1] === '' || (item[0] === 'password' && (/^\d+$/.test(item[1]) === false))) {
                tempObj = {
                    status: true,
                    field: item[0],
                    message: (item[1] === '') ? `${item[0]} is empty` : `Password must only contain digits`
                }
            }
        })
        if (tempObj.status === true) {
            setErrorFlag({ ...tempObj })
        }
        else {
            tempObj = {
                status: false,
                field: '',
                message: ''
            }
            setErrorFlag({ ...tempObj })
        }
    }

    return (
        <div className='form-container'>
            <Card
                cardType="Default"
                primaryAction={{
                    content: 'Submit',
                    type: 'Primary',
                    onClick: submitForm
                }}
                secondaryAction={{
                    content: 'Reset',
                    type: 'Outlined'
                }}
                subTitle="*All fields are mandatory"
                title="Form"
            >
                <FormElement horizontal={true}>
                    <Card>
                        <TextField
                            required
                            name={<p><b>Username</b></p>}
                            onChange={(e: any) => onChangeHandler(e, 'userName')}
                            placeHolder="Enter Username"
                            showHelp="Must only contain alphanumeric values"
                            type="text"
                            value={loginDetails.userName}
                        />
                    </Card>
                    <Card>
                        <TextField
                            required
                            name={<p><b>Password</b></p>}
                            onChange={(e: any) => onChangeHandler(e, 'password')}
                            placeHolder="Enter Password"
                            showHelp="Must only contain numeric values"
                            type="password"
                            value={loginDetails.password}
                        // required
                        />
                    </Card>
                    <Card>
                        {(errorFlag.status === true) ? <p className='error-msg'>{errorFlag.message}</p> : <p className='success-msg'>Logged In</p>}
                    </Card>
                </FormElement>
            </Card>
        </div>
    )
}
