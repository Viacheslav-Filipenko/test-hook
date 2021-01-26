import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(
   createStyles({
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
      link: { '&:focus': { textDecoration: 'underline' } },
      container: {
         display: 'flex',
         margin: '0 auto',
         maxWidth: 1280,
         justifyContent: 'center'
      }
   })
);

export default useStyles;
