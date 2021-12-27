import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { getPlans } from '../utils/api';
import { useCart } from '../contexts/CartContext';

function PlanCard({ id, name, description, price }) {
    const { state, addToCart } = useCart()
    const handleAddToCart = () => {
        addToCart(
            { id, name, description, price }
        )
        console.log(state)
    }

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleAddToCart}>Add to cart</Button>
            </CardActions>
        </Card>
    );
}

export default function Plans() {
    const [plans, setPlans] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            getPlans();
            setPlans(await getPlans());
        }
        fetchData();
    }, [])
    return (
        <Box display="flex" >
            {plans.map(plan => {
                return <PlanCard
                    key={plan.id}
                    id={plan.id}
                    name={plan.name}
                    description={plan.description}
                    price={plan.price}
                ></PlanCard>
            })}
        </Box>
    )
}
