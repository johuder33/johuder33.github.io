import makeStyles from '@material-ui/styles/makeStyles';

export const useStyles = makeStyles(({ spacing }) => ({
  section: {
    padding: `${spacing(7)}px ${spacing(4)}px`
  },
  item: {
    marginBottom: spacing(4)
  }
}));
