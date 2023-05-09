import React from "react";
import { Grid, Heading, Stack, Text,Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export  const FollowPart=()=> {
  let Follow = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJf7s_bjCOCchO4LPMKj1FQaW-OfamV6kzrKYlBHn1IxZApCANgVrfu__TJmoVAYFCcw&usqp=CAU",
    },
    {
      img: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=",
    },
    {
      img: "https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?b=1&s=612x612&w=0&k=20&c=gApYcn6GubvJA-YoMO00KZAShv66MHEwrsAbcmaq_cQ=",
    },
    {
      img: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
    },
    {
      img: "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=12CUDMMzA78XFt16_0PynybQ5O4EBpNSIWSlYsCA8Zc=",
    },
    
  ];
  return (
    <Stack>
      <Heading margin={"50px 0 30px 0"}>FOLLOW US ON</Heading>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
        }}
        gap="5"
        padding={{
            base: "0",
            sm: "0 10px",
            lg: "0 100px",
          }}
      >
        {Follow.map((el) => (
          <NavLink href={""} key={el.name}>
            <Stack   
            //border={"1px solid red"}
            >
              <Image
                borderRadius={"20px"}
                // border={"1px solid black"}
                src={el.img}
                alt={el.name}
                height={"auto"}
                sizes="100vw"
                style={{ width: "auto", }}
              />
            </Stack>
          </NavLink>
        ))}
      </Grid>
    </Stack>
  );
}