import { createGlobalStyle } from 'styled-components'

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