import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { getPlans } from "../utils/api"
import { useCart } from '../contexts/CartContext';


export default function Cart() {
    const {state:cartData} = useCart()
    
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

    useEffect(() => {
        const fetchData = async () => {
            setPlans(cartData.map(data => data.content))
            // setPlans(cartData);
        }
        fetchData();
    }, [])

    const handleSelect = (selectionModel, detail) => {
        console.log(selectionModel, detail)
    }

    return (
        <Box height={400} width="100%">
            <DataGrid
                rows={plans}
                columns={columns}
                onSelectionModelChange={handleSelect}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    )
}