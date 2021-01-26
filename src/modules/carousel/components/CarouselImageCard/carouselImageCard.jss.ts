import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_theme: Theme) => {
   return createStyles({
      caption: {
         color: '#000',
         padding: '0rem',
         display: '-webkit-box',
         lineClamp: 3,
         boxOrient: 'vertical',
         overflow: 'hidden',
         margin: '1rem auto 0 auto',
         textAlign: 'center'
      },
      imageContainer: {
         margin: '0 auto',
         display: 'flex',
         '& div': {
            margin: 'auto'
         },
         '& img': {
            cursor: 'pointer'
         }
      },
      img: {
         margin: 'auto',
         alignItems: 'center',
         width: 'auto',
         maxHeight: '100%',
         height: 'auto',
         maxWidth: '100%',
         verticalAlign: 'middle'
      },
      container: {
         width: '100%',
         display: 'block',
         cursor: 'default',
         '&:focus': { textDecoration: 'underline' }
      }
   });
});
export default useStyles;
