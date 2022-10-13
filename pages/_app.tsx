import React from "react";
import Head from "next/head";
import { GlobalStyles } from "../styles/GlobalStyles";
import "../styles/globals.css";

type AppProps = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Good Vibes</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>

	);
}

export default MyApp;
