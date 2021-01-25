import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((_theme: Theme) =>
   createStyles({
      arrowContainer: {
         background: 'none',
         border: 0,
         color: 'black',
         cursor: 'pointer'
      }
   })
);

export default useStyles;
