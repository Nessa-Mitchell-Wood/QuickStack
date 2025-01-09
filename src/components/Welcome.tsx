import { FC } from 'hono/jsx';

import { Card } from './Card';
import { Banner } from './Banner';

export const Welcome: FC = () => {
	return (
		<>
			<Banner title="Quick Stack" />
			<div className="container py-8">
				<Card title="Quick Stack" subtitle="Welcome to the quick stack">
					{['dotenv', 'hono', 'alpinejs', 'htmx.org', 'tailwind'].map(
						(d) => (
							<a
								className="border border-slate-500 border-opacity-10 rounded shadow-sm px-4 py-2 mr-4 last:mr-0 uppercase text-xs text-slate-900 text-opacity-80 hover:shadow hover:text-opacity-100"
								href="#!">
								{d}
							</a>
						),
					)}
				</Card>
			</div>
		</>
	);
};
