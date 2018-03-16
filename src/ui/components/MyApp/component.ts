import Component from '@glimmer/component';
//import { number } from 'card-validator/src/card-number';
//import valid from 'card-validator';


export default class MyApp extends Component {
  user = {
    name: 'Robbie',
    log: (() => {
      debugger;
      console.log('hello');
      return '411';//valid('4111');
    })()
  };
}
