import React, {useState} from 'react'
import styled from 'styled-components'
import logo from "./Components/Assets/utiva.svg";
import GlobalButton from './Components/GlobalButton';
import Globaldrop from './Globaldrop';
import img from "./Components/Assetslogo1.svg"
import {BsChevronDown} from "react-icons/bs"
import log from "./Components/Assets/logo1.svg"
import lag from "./Components/Assets/lap2.svg"
import lap from "./Components/Assets/p.svg"

const Utiva = () => {
    const [show, setShow] = useState<boolean>(false);
    const [show1, setShow1] = useState<boolean>(false);
    const [show2, setShow2] = useState<boolean>(false);

	const toggleShow = () => {
		setShow(!show);
	};
    const toggleShow1 = () => {
		setShow1(!show1);
	};
    const toggleShow2 = () => {
		setShow2(!show2);
	};
  return (
    <Container>
        <Header>
            <Wrapper>
                <Logo src={logo}/>
            <Nav>
                <Navs onClick={toggleShow}>
                       Schools{" "}
                    <Icons>
                        <BsChevronDown />
                    </Icons>
                </Navs>
                <Navs2 onClick={toggleShow1}>
                       Enterprise{" "}
                    <Icons>
                        <BsChevronDown />
                    </Icons>
                </Navs2>
                <Navs onClick={toggleShow2}>
                      Company{" "}
                    <Icons>
                        <BsChevronDown />
                    </Icons>
                </Navs>
            </Nav>
                <Button>
                    <GlobalButton br="er" bg="hh" tt="" text="Get Started" by="ghsg" be="" bm="hfg" bc="ss"/>
                    <GlobalButton br="er" bg="hh" tt="" text="Login" by="" be="tt" bm="" bc=""/>
                </Button>
            </Wrapper>
        </Header>
        {show ? (
				<Globaldrop 
                    sch="Schools" 
                    na1="Data" 
                    na2="Product Management" 
                    na3="Cloud Computing" 
                    na4="Business Analysis"
                    na9=""
                    pr="Top Programs"
                    na5="Data Bootcamp"
                    na6="Product Bootcamp"
                    na7="Cloud Bootcamp"
                    na8="Business Analysis"
                    na10="Career"
                    q="Why learn at Utiva?"
                    a="We offer learning programs that are designed by industry knowledge experts and co-created with leading companies."
                    image={log}
                    fr="Utiva for Individuals"
                    />
			) : null}
            {show1 ? (
                <Globaldrop 
                    sch="Grow with Utiva" 
                    na1="Business" 
                    na2="Utiva Hire" 
                    na3="Utiva Impact" 
                    na4="Utiva Kids"
                    na9="The Nucleus"
                    pr="Impact"
                    na5="Blog"
                    na6="Events"
                    na7="Masterclass"
                    na8="Consulting Practise"
                    na10="Scholarship"
                    q="Why learn at Utiva?"
                    a="We offer learning programs that are designed by industry knowledge experts and co-created with leading companies."
                    image={lag}
                    fr="Utiva for Enterprise"
                    />
            ) : null}
            {show2 ? (
                <Globaldrop 
                    sch="Company" 
                    na1="About Us" 
                    na2="Career" 
                    na3="Be A Trainer" 
                    na4="Our Partners"
                    na9="Utiva Business Network"
                    pr="Reports"
                    na5="Download 2020 Report"
                    na6="Download 2019 Report"
                    na7="Masterclass"
                    na8="Consulting Practise"
                    na10="Scholarship"
                    q="Why learn at Utiva?"
                    a="We offer learning programs that are designed by industry knowledge experts and co-created with leading companies."
                    image={lap}
                    fr="Utiva as A Company"
                    />
            ) : null}
    </Container>
  )
}

export default Utiva
const DropDown = styled.div`
	position: absolute;
 	width: 600px;
 	height: 300px;
 	background-color: white;
    top: 20%;
 	left: 30%;
 	right: 60%;
    z-index: 11;
 `;

const Icons = styled.div`
    margin-left: 10px;
    margin-top: 4px;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #1e2027;
    font-weight: bold;
`

const Button = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-between;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


const Navs = styled.div`
    display: flex;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #1e2027;
    cursor: pointer;
`
const Navs2 = styled.div`
    display: flex;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #1e2027;
    cursor: pointer;
`
    


const Nav = styled.div`
    display: flex;
    width: 320px;
    justify-content: space-between;
`

const Logo = styled.img`
    height: 35px;
`

const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #FDFDFB;
`

// import React, { useState } from "react";
// import styled from "styled-components";
// import GlobalButton from './Components/GlobalButton';
// import pic from "./Components/Assets/utiva.svg";
// import { FaChevronDown } from "react-icons/fa";
// const Header = () => {
// 	const [show, setShow] = useState<boolean>(false);

// 	const toggleShow = () => {
// 		setShow(!show);
// 	};

// 	return (
// 		<Container>
// 			<Head>
//                 <Wrapper>
// 				<Logo src={pic} />
// 				<Navigation>
// 					<Nav onClick={toggleShow}>
// 						Schools{" "}
// 						<Icon>
// 							<FaChevronDown />
// 						</Icon>
// 					</Nav>
// 					<Nav onClick={toggleShow}>
// 						Enterprise{" "}
// 						<Icon>
// 							<FaChevronDown />
// 						</Icon>
// 					</Nav>
// 					<Nav onClick={toggleShow}>
// 						Company{" "}
// 						<Icon>
// 							<FaChevronDown />
// 						</Icon>
// 					</Nav>
//                     <Button>                     <GlobalButton br="er" bg="hh" tt="" text="Get Started" by="ghsg" be="" bm="hfg" bc="ss"/>
//                         <GlobalButton br="er" bg="hh" tt="" text="Login" by="" be="tt" bm="" bc=""/>
//                     </Button>
// 				</Navigation>
// 				{/* <Holder>
// 					<GlobalButton
// 						bg='#fbaf1b'
// 						bd=''
// 						title='Get Started'
// 						cl='white'
// 						wd='120px'
// 					/>
// 					<GlobalButton
// 						bg=''
// 						bd='1px solid #000269'
// 						title='Login'
// 						cl='#000269'
// 						wd='100px'
// 					/>
// 				</Holder> */}
// 			</Wrapper>
//             </Head>

// 			{show ? (
// 				<DropDown>
// 					<h2>hello</h2>
// 				</DropDown>
// 			) : null}
// 		</Container>
// 	);
// };

// export default Header;
// const Head = styled.div`
//     width: 100%;
//     height: 80px;
//     display: flex;
//     align-items: center;
//      justify-content: center;
//  `

// const Button = styled.div`
//     width: 240px;
//     display: flex;
//     justify-content: space-between;
// `
// const DropDown = styled.div`
// 	position: absolute;
// 	width: 500px;
// 	height: 300px;
// 	background-color: white;
// 	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// 	border: 1px solid black;
// 	top: 90%;
// 	left: 30%;
// 	right: 60%;
// `;

// const Holder = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	width: 270px;
// `;
// const Icon = styled.div`
// 	margin-left: 10px;
// 	font-size: 10px;
// `;

// const Wrapper = styled.div`
// 	 width: 90%;
//      display: flex;
//      align-items: center;
//     justify-content: space-between;
// `;
// const Container = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// 	background-color: #ecf1fd;
// 	height: 70px;
// 	position: sticky;
// 	top: 0;
// 	z-index: 1;
// 	/* position: fixed;
// 	top: 0;
// 	bottom: 0; */
// `;

// const Logo = styled.img``;
// const Navigation = styled.div`
// 	display: flex;
// 	font-size: 14px;
//     background-color: red;
// `;
// const Nav = styled.div`
// 	display: flex;
     
     
// 	:hover {
// 		color: gray;
// 	}
// `;