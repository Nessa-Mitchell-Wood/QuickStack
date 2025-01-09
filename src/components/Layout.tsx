import { PropsWithChildren, FC } from 'hono/jsx';

export const Layout: FC<{ title: string }> = ({
	title,
	children,
}: PropsWithChildren) => {
	return (
		<html lang="en-au">
			<head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>{title}</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<script src="/static/js/alpine.js" defer></script>
				<script src="/static/js/htmx.js" defer></script>
				<link rel="stylesheet" href="/static/css/main.css" />
			</head>
			<body>
				{children}
				<script src="/static/js/main.js"></script>
			</body>
		</html>
	);
};
