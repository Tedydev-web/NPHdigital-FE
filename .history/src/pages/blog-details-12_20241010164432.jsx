import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import BlogDetails12 from '@/components/blog/BlogDetails12';
import BlogRelated from '@/components/blog/BlogRelated';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import Switcher from '../components/common/Switcher';

const BlogDetails = () => {
	const [mode, setMode] = useState('light');
	const cursor1 = useRef();
	const cursor2 = useRef();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (mode === 'light') {
				document.querySelector('body').classList.add('light');
			} else {
				document.querySelector('body').classList.remove('light');
			}
		}
	}, [mode]);

	return (
		<>
			<Switcher
				setMode={setMode}
				mode={mode}
				cursor1={cursor1}
				cursor2={cursor2}
			/>
			<Head>
				<title>Blog Details</title>
				<meta
					name="description"
					content="Blog Details Description"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main>
				<RootLayout
					header="header3"
					footer="footer3"
					defaultMode="light">
					<BlogDetails12 />
					<BlogRelated />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default BlogDetails12;
