import { PropsWithChildren, FC } from 'hono/jsx';

export const Card: FC<{ title: string; subtitle: string }> = ({
	title,
	subtitle,
	children,
}: PropsWithChildren) => {
	return (
		<div className="card">
			<h2 className="card__title">{title}</h2>
			<p className="card__sub-title">{subtitle}</p>
			<div className="card__content">{children}</div>
		</div>
	);
};
