"use client"

import axios from "axios";
import { useEffect } from "react";

function Profile() {

    useEffect(() => {
        axios({
            method: 'POST',
            url: '/api/profile/bio',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <h1>PROFILE PAGE</h1>
        </div>
    );
}

export default Profile;