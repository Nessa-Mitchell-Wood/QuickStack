import { FC } from 'hono/jsx';

import { Card } from './Card';
import { Banner } from './Banner';

export const Welcome: FC = () => {
	return (
		<>
			<Banner title="Quick Stack" />
			<div className="container py-4 md:py-8 lg:py-12">
				<Card title="Quick Stack" subtitle="Welcome to the quick stack">
					{[
						{
							name: 'dotenv',
							url: 'https://github.com/motdotla/dotenv',
						},
						{
							name: 'hono',
							url: 'https://hono.dev/',
						},
						{
							name: 'alpinejs',
							url: 'https://alpinejs.dev/',
						},
						{
							name: 'htmx.org',
							url: 'https://htmx.org/',
						},
						{
							name: 'tailwindcss',
							url: 'https://tailwindcss.com/',
						},
					].map((link) => (
						<a
							className="link-button"
							href={link.url}
							target="_blank">
							{link.name}
						</a>
					))}
				</Card>
			</div>
		</>
	);
};
