import { PropsWithChildren } from 'hono/jsx';

export const Banner: FC<{ title: string }> = ({
	title,
	children,
}: PropsWithChildren) => {
	return (
		<div className="bg-slate-100 ">
			<div className="container py-12">
				<h1 className="h1 text-black text-opacity-60">{title}</h1>
				{children}
			</div>
		</div>,
	);
};
