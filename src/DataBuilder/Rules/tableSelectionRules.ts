import { RuleRecord } from '../../models';
import * as shortid from 'shortid';

const data = {
  id: shortid.generate(),
  name: 'Table Selection Rules',
  content: `rule SelectTable{
        when {
          r: Result;
          s: State;
          a: Action (a.type == 'EXECUTE_COMMAND' && a.data.name == 'Select Table') from s.action;
        }
        then {
          r.add('SELECT_CARD',{type:'Table', selected:s.card.getTag('Table')});
        }
      }
      
      rule SetTable{
        when {
          r: Result;
          s: State;
          a: Action (a.type == 'SELECT_CARD' && a.data.type == 'Table') from s.action;
        }
        then {
          r.add('SET_CARD_TAG',{type:'Ticket Table',value:s.state.get('Table')});
        }
      }`
};

export default new RuleRecord(data);