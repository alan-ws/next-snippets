import type {GetServerSidePropsContext} from 'next';
export function getServerSideProps(context: GetServerSidePropsContext) {
	const data = Object.keys(context.req.cookies).map((value: any) => context.req.cookies[value]);
	return {
		props: {data}
	}
}
export default function Cookie({data}: {data: []}) {
	if (data.length < 1) return <h1>Reload</h1>
	return (
		<main>
			{data && data.map((cookie, i) => <h1 key={i}>{cookie}</h1>)}
		</main>
	)
}
