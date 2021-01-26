import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_theme: Theme) => {
   return createStyles({
      carouselHeadline: {
         '& $headline': {
            paddingBottom: 24,
            '& hr': {
               marginBottom: 21
            }
         },
         '& $headlineWrapper': {
            width: '100%',
            maxWidth: 1280
         },
         '& $title': {
            position: 'relative',
            fontSize: '21px'
         },
         '& $divider': {
            position: 'relative',
            height: 3
         },
         '& $link': { '&:focus': { textDecoration: 'underline' } },
         '& $container': {
            display: 'flex',
            margin: '0 auto',
            maxWidth: 1280,
            justifyContent: 'center'
         }
      }
   });
});

export default useStyles;
