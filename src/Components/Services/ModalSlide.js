import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const ModalWrapper = styled.div`
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: rgba(0, 0, 0, 1);
	border: 1px solid #fff;
	color: #fff;
	position: absolute;
	z-index: 10;
	border-radius: 10px;
	top: 15%;
	left: 15%;
	right: 15%;
	bottom: 15%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	line-height: 1.8;
	color: #141414;

	p {
		margin-bottom: 1rem;
	}

	button {
		padding: 10px 24px;
		background: #141414;
		color: #fff;
		border: none;
	}
`;

const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
`;

export const ModalSlide = ({ showModal, setShowModal, text1, text2 }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
				console.log("I pressed");
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<>
			{showModal ? (
				<Background onClick={closeModal} ref={modalRef}>
					<ModalWrapper className="p-4" showModal={showModal}>
						<ModalContent>
							<h1 className="text-light modal-h1 font-weight-bold">
								{text1}!
								<br />
								{text2}
							</h1>
							<form action="#">
								<input
									className="bg-transparent w-100 modal-input py-3 px-0 p-sm-3"
									type="email"
									placeholder="Enter your email ID here"
									required
								/>
								<button type="submit" className="mx-auto d-block border rounded mt-3 modal-submit">
									Send
								</button>
							</form>
						</ModalContent>
						<CloseModalButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
					</ModalWrapper>
				</Background>
			) : null}
		</>
	);
};
