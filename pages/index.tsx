import { makeStyles } from '@material-ui/core/styles';
import Form from '../pages/component/Form';
import Header from '../pages/component/Header';
import TodoList from '../pages/component/TodoList';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        // height: "100%"
    },
    form:{
      marginTop: '1rem'
    }
});

export default function Home() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <Header />
          <div className={classes.form}>
          <Form />
          </div>
          <TodoList />
      </div>
  
  )
}
