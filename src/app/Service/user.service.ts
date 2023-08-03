export class UserService {
    users = [
        {name: 'waseem', status: 'Active'},
        {name: 'nadeem', status: 'Active'},
        {name: 'kashif', status: 'Active'},
    ];
    
    addUser(name: string, status: string) {
     this.users.push({name , status});
    }

    updateStatus(id: number, status: string) {
        this.users[id].status = status;
    }
}