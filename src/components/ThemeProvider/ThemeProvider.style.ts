import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
		background-color: #2F2E41;
		color: #fff;
		font-family: 'Open Sans', sans-serif;
		font-weight: 700;
		font-size: 16px;
	}
	
	body {
		margin: 16px;
	}

	p {
		margin: 0;
		padding: 0;
	}

	button {
		background-color: #009EDD;
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 700;
		line-height: 19.07px;
		padding: 11px 60px;
		border: solid 1px #009EDD;
		border-radius: 4px;
		color: #fff;
		cursor: pointer;
	}
`

export const SuccessAndReloadPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	max-width: 960px;
	background-color: #fff;
	flex-direction: column;
	color: #2F2E41;
	padding: 64px 24px;
	margin: 0 auto;
	border-radius: 4px;

	p {
		font-size: 20px;
		line-height: 27.24px;
		text-align: center;
	}
`