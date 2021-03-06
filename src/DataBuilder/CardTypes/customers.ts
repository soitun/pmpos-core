import { CardTypeRecord } from '../../models';
import CustomerPhone from '../TagTypes/customerPhone';
import CustomerAddress from '../TagTypes/customerAddress';

const data = {
    id: 'r1QA8MK5z',
    name: 'Customers',
    reference: 'Customer',
    tagTypes: [CustomerPhone.id, CustomerAddress.id]
};

// id: string;
// name: string;
// reference: string;
// displayFormat: string;
// commands: string[];
// tagTypes: string[];
// subCardTypes: string[];

export default new CardTypeRecord(data);
