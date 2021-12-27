import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { getPlans } from "../utils/api"
import { useCart } from '../contexts/CartContext';


export default function Cart() {
    const { state: cartData } = useCart()

    const [plans, setPlans] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: false,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 150,
            editable: false,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
            editable: false,
        },
    ];
    const transformedData = (data) => {
        return cartData.map(data => data.content)
    }
    useEffect(() => {
        const fetchData = async () => {
            setPlans(transformedData(cartData))
            // setPlans(cartData);
        }
        fetchData();
    }, [])

    const getCartTotal = () => {
        const data = transformedData(cartData)
        console.log(data.reduce((a, b) => +a + +b.price, 0))
        return data.reduce((a, b) => +a + +b.price, 0);
    }

    return (
        <Box height={400} width="100%">
            <DataGrid
                rows={plans}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
            {getCartTotal() === 0 ? <></> : <Button
                variant='contained'
                onClick={() => {alert(`Thanks for your payment`)}}
            >
                Pay {getCartTotal()}
            </Button>}

        </Box>
    )
}