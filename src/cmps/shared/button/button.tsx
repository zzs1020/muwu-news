import React, { MouseEvent, FC } from 'react'; // FunctionComponent defined children

type Props = {
	type?: string,
	cls?: string,
	size?: string,
	onClick?: (e: MouseEvent<HTMLElement>) => void
};

const Button: FC<Props> = ({onClick = null, type = 'button', cls = 'primary', size = 'default-size', children}) => {
	return (
		<button type={type} onClick={onClick} className={`btn btn-${cls} btn-${size}`}>
			{children}
		</button>
	);
};

export default Button;
