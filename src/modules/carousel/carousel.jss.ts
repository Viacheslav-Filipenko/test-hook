import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_theme: Theme) => {
	return createStyles({
		sliderContainer: {
			maxWidth: 1280 + 46 + 46,
			margin: '0 auto',
		},
		sliderContent: {
			transition: 'transform cubic-bezier(0.4, 0, 0.2, 1) 750',
			marginLeft: '0',
			marginRight: '0',
			display: 'flex',
			height: '100%',
			padding: 0,
		},
		wrapper: {
			padding: '0 2.9375rem',
		},
		arrowBack: {
			display: 'flex',
			alignItems: 'center',
			height: '100%',
			justifyContent: 'flex-endx  1',
			transition: 'opacity cubic-bezier(0.4, 0, 1, 1) 225',
		},
		slide: {
			textAlign: 'center',
		},
		arrowForward: {
			display: 'flex',
			alignItems: 'center',
			height: '100%',
			justifyContent: 'center',
			transition: 'opacity cubic-bezier(0.4, 0, 1, 1) 225',
		},
		main: {
			margin: '0 auto',
		},
		link: { '&:focus': { textDecoration: 'underline' } },
		content: { flex: 1, maxWidth: 1280 },
		container: {
			display: 'flex',
			margin: '0 auto',
			maxWidth: 1280,
			justifyContent: 'center',
		},
		arrowContainer: {
			background: 'none',
			padding: '10px',
			border: 0,
		},
	});
});

export default useStyles;
