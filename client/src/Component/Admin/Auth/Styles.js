import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: '0px',
    margin: '0px',
    height: '100%',
  },
  container1: {
    padding: '0px',
    margin: '0px',
    height: '100%',
  },
  Style: {
    marginTop: '20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '100px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '60px',
      height: '140vh',
    }
  },
  Style1: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    borderRadius: '0.5rem',
    maxWidth: '500px',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    margin: theme.spacing(3),

  },
  paper1: {
    maxWidth: '400px',
    borderRadius: '0.5rem',
    padding: theme.spacing(2),
    margin: theme.spacing(2),

  },
  Error: {
    color: 'white',
    fontSize: '12px',
    fontStyle: 'bold',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '5px',
    padding: '12px 5px 12px 5px',
    backgroundColor: '#595775',
    borderRadius: '5px',
  },
  success: {
    color: 'white',
    fontSize: '12px',
    fontStyle: 'bold',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '5px',
    borderRadius: '5px',
    padding: '12px 5px 12px 5px',
    backgroundColor: '#17a2b8',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#595775',
  },
  formData: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  label: {
    color: "black"
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
    backgroundColor: '#595775',
    color: 'white',
    letterSpacing: '2px',
    padding: '0.4rem 0.7rem',
    letterSpacing: '2px',
    fontSize: '15px',
    marginTop: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#595775',
      color: 'white',
    }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: '#595775',
    color: 'white',
    fontSize: '15px',
    padding: '0.4rem 1rem',
    letterSpacing: '1px',
  },
}));