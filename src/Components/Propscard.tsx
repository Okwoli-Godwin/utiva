import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Iprops {
	bg: string;
	title: string;
	MyImg: string;
}

const PropsCard: React.FC<Iprops> = ({ title, MyImg, bg }) => {
	return (
		<Container>
			<Card bg={bg}>
				<Imag src={MyImg} />
				<TextHold>
					<Text1>{title}</Text1>
					<Text2>
						<p>View Courses</p>{" "}
						<Icon>
							<AiOutlineArrowRight />
						</Icon>
					</Text2>
				</TextHold>
			</Card>
		</Container>
	);
};

export default PropsCard;

const Card = styled.div<{ bg: string }>`
	height: 270px;
	width: 260px;
	background-color: ${(props) => props.bg};
	color: white;
	border-radius: 5px;
	overflow: hidden;
	margin: 10px;
`;
const Imag = styled.img`
	height: 150px;
	width: 100%;
	/* background-color: black; */
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	cursor: pointer;

	:hover {
		transform: scale(1.1);
		transition: all 350ms;
		filter: grayscale(1);
	}
`;
const TextHold = styled.div`
	margin-left: 10px;
`;
const Text1 = styled.div`
	margin-top: 10px;
	/* background-color: red; */
	width: 80%;
`;
const Text2 = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
`;
const Icon = styled.div`
	margin-left: 10px;
`;
const Container = styled.div``;