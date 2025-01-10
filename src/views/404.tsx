import { FC } from 'hono/jsx';

import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';
import { Card } from '../components/Card';

export const NotFound: FC = () => {
	return (
		<Layout title="Quick Stack">
			<Banner title="404" />
			<div className="container py-4 md:py-8 lg:py-12">
				<Card title="Whoops!" subtitle="I can't find the thing...">
					<a href="/" className="link-button">
						Home
					</a>
				</Card>
			</div>
		</Layout>
	);
};
