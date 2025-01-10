import { PropsWithChildren } from 'hono/jsx';

export const Banner: FC<{ title: string }> = ({
	title,
	children,
}: PropsWithChildren) => {
	return (
		<div className="bg-blue-500 shadow-md">
			<div className="container py-4 sm:py-12">
				<h1 className="h1 text-white text-opacity-20">{title}</h1>
				{children}
			</div>
		</div>,
	);
};
