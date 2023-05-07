import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';


import {
  Box,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';

const Sidebar = () => {
  const [searchParams,setSearchParams] =useSearchParams();
  const initialCategory=searchParams.getAll("category");
 const [category,setCategory]=useState(initialCategory||[]);
 const initialBrand=searchParams.getAll("brand");
 const [brand,setBrand]=useState(initialBrand||[]);
 


 const handleCategory=(e)=>{
   const {value} = e.target;
let newCategory=[...category];
if(newCategory.includes(value)){
 newCategory = newCategory.filter((el)=>el!==value);
}else{
 newCategory.push(value);
}

setCategory(newCategory);
// console.log("gsgc",category)
 };


 const handleBrand=(e)=>{
   const {value} = e.target;
   let newBrand=[...brand];
   if(newBrand.includes(value)){
     newBrand = newBrand.filter((el)=>el!==value);
  }else{
   newBrand.push(value);
  }
  console.log("newBrand", newBrand);
  setBrand(newBrand);
 };

 const initialOrder=searchParams.get("order");
 const [order,setOrder] = useState(initialOrder || "");

 const handleSort=(e)=>{
  // if (!e || !e.target) {
  //   return;
  // }


   const {value} = e.target;
   // console.log(value);
   setOrder(value);
 };
 

 useEffect(()=>{
   let params={
     category,
     brand,
   }
   order && (params.order = order);
   setSearchParams(params)
 },[category,brand,order]);
  
  return (
    <Box style={{position:"relative",left:0}}>
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Filter by Category
      </Text>

      <Stack spacing="2" mb="4">
        <Checkbox
          value="Kurta"
          onChange={handleCategory}
          isChecked={category.includes('Kurta')}
        >
          Kurta
        </Checkbox>

        <Checkbox
          value="Sports-Wear"
          onChange={handleCategory}
          isChecked={category.includes('Sports-Wear')}
        >
          Sports-Wear
        </Checkbox>

        <Checkbox
          value="Inner-Wear"
          onChange={handleCategory}
          isChecked={category.includes('Inner-Wear')}
        >
          Inner-Wear
        </Checkbox>
      </Stack>

      <Text fontSize="xl" fontWeight="bold" mb="4">
        Filter by Brand
      </Text>

      <Stack spacing="2" mb="4">
        <Checkbox
          value="SMITH"
          onChange={handleBrand}
          isChecked={brand.includes('SMITH')}
        >
          SMITH
        </Checkbox>

        <Checkbox
          value="HEORA"
          onChange={handleBrand}
          isChecked={brand.includes('HEORA')}
        >
          HEORA
        </Checkbox>

        <Checkbox
          value="POLO"
          onChange={handleBrand}
          isChecked={brand.includes('POLO')}
        >
          POLO
        </Checkbox>

        <Checkbox
          value="RAYMOND"
          onChange={handleBrand}
          isChecked={brand.includes('RAYMOND')}
        >
          RAYMOND
        </Checkbox>
      </Stack>

      <Text fontSize="xl" fontWeight="bold" mb="4">
        Sort by Price
      </Text>

      { <div onChange={handleSort}>
<input type="radio" name="order" value={"asc"} 
 defaultChecked={order==="asc"}
></input>
<label>Ascending</label>
<br></br>
<input type="radio" name="order" value={"desc"} 
  defaultChecked={order==="desc"} 
 ></input>
 <label>Descending</label>
 </div> }



    </Box>
  );
};

export default Sidebar;
