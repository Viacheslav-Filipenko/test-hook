import { makeStyles, Theme, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => {
   return createStyles({
      sliderContainer: {
         maxWidth: 1280 + 46 + 46,
         margin: '0 auto'
      },
      sliderContent: {
         transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.complex
         }),
         marginLeft: '0',
         marginRight: '0',
         display: 'flex',
         height: '100%',
         padding: 0
      },
      wrapper: {
         padding: '0 2.9375rem'
      },
      headline: {
         paddingBottom: 24,
         '& hr': {
            marginBottom: 21
         }
      },
      headlineWrapper: {
         width: '100%',
         maxWidth: 1280
      },
      title: {
         position: 'relative',
         fontSize: '21px'
      },
      divider: {
         position: 'relative',
         height: 3
      },
      arrowBack: {
         display: 'flex',
         alignItems: 'center',
         height: '100%',
         justifyContent: 'flex-endx  1',
         transition: theme.transitions.create(['opacity'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen
         })
      },
      slide: {
         textAlign: 'center'
      },
      arrowForward: {
         display: 'flex',
         alignItems: 'center',
         height: '100%',
         justifyContent: 'center',
         transition: theme.transitions.create(['opacity'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen
         })
      },
      main: {
         margin: '0 auto'
      },
      link: { '&:focus': { textDecoration: 'underline' } },
      content: { flex: 1, maxWidth: 1280 },
      container: {
         display: 'flex',
         margin: '0 auto',
         maxWidth: 1280,
         justifyContent: 'center'
      },
      arrowContainer: {
         background: 'none',
         border: 0,
         cursor: 'pointer'
      }
   });
});

export default useStyles;
