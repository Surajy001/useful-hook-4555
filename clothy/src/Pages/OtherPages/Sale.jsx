import { ArrowBackIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import style from './style.module.css'
function Sale() {
  return (
    <div style={{width:'80%',margin:'auto'}}>
        <Text fontWeight={'bold'} fontSize={"4rem"} fontFamily={"Cursive"} margin={'5rem 3rem'}>
            Season Sale'are going on 🤯 Hurry up!! <br /> Buy your Favourite Product At a budget friendly Cost !!😆 
        </Text>
            <Link className={style.links} to="/menproducts" style={{fontWeight:'bold',fontSize:'2rem',color:'blue',margin:'3rem auto',_hover:{textDecoration:'underline'}}} > Click to Continiue Shoping <ArrowBackIcon/> </Link>
    </div>
  )
}

export default Sale;