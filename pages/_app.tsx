import { AppProps } from 'next/app';
import { Noto_Sans_Bengali } from 'next/font/google';
import '../styles/index.css';
const noto = Noto_Sans_Bengali({ subsets: ['bengali'] });
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${noto.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
