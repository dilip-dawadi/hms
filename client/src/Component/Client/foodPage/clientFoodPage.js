import React from 'react'
import FoodAdminPage from '../../Admin/foodPageAdmin/foodAdmin'
import FoodClientPage from './clientFood/clientFood'
const ClientHomePost = () => {
    const role = JSON.parse(localStorage.getItem('profile'))
    if (role) {
        return (
            <FoodAdminPage />
        )
    }
    return (
        <FoodClientPage />
    )
}

export default ClientHomePost