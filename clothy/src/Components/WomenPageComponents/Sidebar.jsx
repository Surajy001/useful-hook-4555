import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
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
    <div>
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
            value="Leggings"
            onChange={handleCategory}
            isChecked={category.includes('Leggings')}
            sx={{
              mr: "0.5rem",
              ml: 0,
              "&:hover": {
                
              }
            }}
            style={{ marginLeft: 0, marginRight: "0.5rem" }}
          />
          <Box as="span" flex='1' textAlign='left'>
          Leggings
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
            value="Gawn"
            onChange={handleCategory}
            isChecked={category.includes('Gawn')}
            sx={{
              mr: "0.5rem",
              ml: 0,
              "&:hover": {
              
              }
            }}
            style={{ marginLeft: 0, marginRight: "0.5rem" }}
          />
          <Box as="span" flex='1' textAlign='left'>
          Gawn
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
            value="Saree"
            onChange={handleCategory}
            isChecked={category.includes('Saree')}
            sx={{
              mr: "0.5rem",
              ml: 0,
              "&:hover": {
             
              }
            }}
            style={{ marginLeft: 0, marginRight: "0.5rem" }}
          />
          <Box as="span" flex='1' textAlign='left'>
          Saree
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
            style={{ marginLeft: 0, marginRight: "0.5rem",  }}
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
            style={{ marginLeft: 0, marginRight: "0.5rem"}}
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
          style={{ marginLeft: 0, marginRight: "0.5rem"}}
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
              style={{ marginLeft: 0, marginRight: "0.5rem" }}
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
              style={{ marginLeft: 0, marginRight: "0.5rem" }}
  
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
              style={{ marginLeft: 0, marginRight: "0.5rem" }}
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
