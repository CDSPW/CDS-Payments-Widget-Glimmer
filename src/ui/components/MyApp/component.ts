import Component from '@glimmer/component';

export default class MyApp extends Component {
  user = {
    name: 'Robbie',
    log: (()=> {
      debugger;
      console.log('hello');
      return 'log';
    })()
  };
}
