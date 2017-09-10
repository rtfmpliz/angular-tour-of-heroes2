import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const heroes = [
            {id:0,name:'Zero'},
            {id:11,name:'Zero1'},
            {id:12,name:'Zero2'},
            {id:13,name:'Zero3'},
            {id:14,name:'Zero4'},
            {id:15,name:'Zero5'},
            {id:16,name:'Zero6'},
            {id:17,name:'Zero7'},
        ];
        return{heroes};
    }
}
