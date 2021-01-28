import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Image } from '../../../../core/components/Image/Image';

import { withStylesInjectedFirst } from '../../../../core/hocs/with-styles-injected-first';

import useStyles from './carouselImageCard.jss';

export interface ICarouselImageCardProps {
	img: string;
	caption?: string;
	link?: string | undefined;
	maxWidth?: number;
	maxHeight?: number;
}

const CarouselImageCardComponent: React.FC<ICarouselImageCardProps> = (props) => {
	const { img = '', caption = '', link = '', maxWidth = 200, maxHeight = 200 } = props;

	const classes = useStyles();

	return (
		<Link href={link} className={classes.container}>
			<div style={{ height: maxHeight, maxWidth: maxWidth }} className={classes.imageContainer}>
				<Image alt='' caption={caption} width='auto' height='auto' src={img} />
			</div>
			<Typography style={{ maxWidth: maxWidth }} className={classes.caption} variant='caption'>
				{caption}
			</Typography>
		</Link>
	);
};

export const CarouselImageCard = withStylesInjectedFirst(CarouselImageCardComponent);
