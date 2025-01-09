import { FC } from 'hono/jsx';

import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';

export const NotFound: FC = () => {
	return (
		<Layout title="Quick Stack">
			<Banner title="404" />
			<div className="container py-12 ">
				<h2 className="h1 text-black text-opacity-80">Whoops!</h2>
				<p className="text-black text-opacity-80">
					I can't find the thing...
				</p>
			</div>
		</Layout>
	);
};
