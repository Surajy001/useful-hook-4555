import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import {
  Box,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider
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
    <div >
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton
        sx={{
          
          color: "black",
          borderRadius: "0.25rem",
          padding: "1rem",
          cursor: "pointer",
          "&:hover": {
           
          }
        }}
      >
        <Box as="span" flex='1' textAlign='left'>
         Filter by Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel
      pb={4}
      textAlign={"left"}
      sx={{
       
        padding: "1rem",
        borderRadius: "0.25rem",
        "&:hover": {
         
        }
      }}
    >
      <label
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover input": {
           
          }
        }}
      >
        <input
          type="checkbox"
          value="Kurta"
          onChange={handleCategory}
          checked={category.includes("Kurta")}
          sx={{
            mr: "0.5rem",
            ml: 0,
            "&:hover": {
             
            }
          }}
          style={{ marginLeft: 0, marginRight: "0.5rem" }}
        />
        <Box as="span" flex='1' textAlign='left'>
          Kurta
        </Box>
      </label>
      <br />
      <label
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover input": {
           
          }
        }}
      >
        <input
          type="checkbox"
          value="Sports-Wear"
          onChange={handleCategory}
          checked={category.includes("Sports-Wear")}
          sx={{
            mr: "0.5rem",
            ml: 0,
            "&:hover": {
              
            }
          }}
          style={{ marginLeft: 0, marginRight: "0.5rem" }}
        />
        <Box as="span" flex='1' textAlign='left'>
          Sports-Wear
        </Box>
      </label>
      <br />
      <label
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover input": {
           
          }
        }}
      >
        <input
          type="checkbox"
          value="Inner-Wear"
          onChange={handleCategory}
          checked={category.includes("Inner-Wear")}
          sx={{
            mr: "0.5rem",
            ml: 0,
            "&:hover": {
              
            }
          }}
          style={{ marginLeft: 0, marginRight: "0.5rem"}}
        />
        <Box as="span" flex='1' textAlign='left'>
          Inner-Wear
        </Box>
      </label>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton sx={{
         
          color: "black",
          borderRadius: "0.25rem",
          padding: "1rem",
          cursor: "pointer",
          "&:hover": {
           
          }
        }}>
        <Box as="span" flex='1' textAlign='left'>
         Filter by Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
      
    </h2>
    <AccordionPanel pb={4} textAlign={"left"} sx={{
       
        padding: "1rem",
        borderRadius: "0.25rem",
        "&:hover": {
        
        }
      }}>
      <label sx={{ display: 'flex', alignItems: 'center',  "&:hover input": {
          
          } }}>
        <input
          type="checkbox"
          value="SMITH"
          onChange={handleBrand}
          checked={brand.includes('SMITH')}
          sx={{
            mr: "0.5rem",
            ml: 0,
            "&:hover": {
             
            }
          }}
          style={{ marginLeft: 0, marginRight: "0.5rem" }}
        />
        <Box as="span" flex='1' textAlign='left'>
          SMITH
        </Box>
      </label>
      <br />
      <label sx={{
          display: "flex",
          alignItems: "center",
          "&:hover input": {
           
          }
        }}>
        <input
          type="checkbox"
          value="HEORA"
          onChange={handleBrand}
          checked={brand.includes('HEORA')}
          sx={{
            mr: "0.5rem",
            ml: 0,
            "&:hover": {
              
            }
          }}
          style={{ marginLeft: 0, marginRight: "0.5rem" }}
        />
        <Box as="span" flex='1' textAlign='left'>
          HEORA
        </Box>
      </label>
      <br />
      <label  sx={{
          display: "flex",
          alignItems: "center",
          "&:hover input": {
           
          }
        }}>
        <input
        sx={{
          mr: "0.5rem",
          ml: 0,
          "&:hover": {
          
          }
        }}
        style={{ marginLeft: 0, marginRight: "0.5rem" }}
          type="checkbox"
          value="POLO"
          onChange={handleBrand}
          checked={brand.includes('POLO')}
        
        />
        <Box as="span" flex='1' textAlign='left'>
          POLO
        </Box>
      </label>
      <br />
      <label   sx={{
          display: "flex",
          alignItems: "center",
          "&:hover input": {
           
          }
        }}>
        <input
          type="checkbox"
          value="RAYMOND"
          onChange={handleBrand}
          checked={
            brand.includes("RAYMOND")
            }
            sx={{
              mr: "0.5rem",
              ml: 0,
              "&:hover": {
                
              }
            }}
            style={{ marginLeft: 0, marginRight: "0.5rem"}}
            />
            RAYMOND
            </label>
            </AccordionPanel>
            </AccordionItem>


            <AccordionItem>
            <h2>
            <AccordionButton sx={{
        
          color: "black",
          borderRadius: "0.25rem",
          padding: "1rem",
          cursor: "pointer",
          "&:hover": {
           
          }
        }}>
            <Box as="span" flex="1" textAlign="left">
            Sort by Price
            </Box>
            <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={"left"}
            sx={{
             
              padding: "1rem",
              borderRadius: "0.25rem",
              "&:hover": {
               
              }
            }}
            >
            <label style={{ display: "block" }}
             sx={{
              display: "flex",
              alignItems: "center",
              "&:hover input": {
                
              }
            }}
            >
            <input
            type="radio"
            name="order"
            value="asc"
            onChange={handleSort}
            checked={order === "asc"}
            sx={{
              mr: "0.5rem",
              ml: 0,
              "&:hover": {
                
              }
            }}
            style={{ marginLeft: 0, marginRight: "0.5rem", backgroundColor: "#cbd5e0" }}

            />
            Ascending
            </label>
            <label style={{ display: "block" }}
             sx={{
              display: "flex",
              alignItems: "center",
              "&:hover input": {
            
              }
            }}
            >
            <input
            type="radio"
            name="order"
            value="desc"
            onChange={handleSort}
            checked={order === "desc"}
            sx={{
              mr: "0.5rem",
              ml: 0,
              "&:hover": {
         
              }
            }}
            style={{ marginLeft: 0, marginRight: "0.5rem", backgroundColor: "#cbd5e0" }}
            />
            Descending
            </label>
            </AccordionPanel>
            </AccordionItem>
            </Accordion>;
            

  </div>
  );
};

export default Sidebar;
