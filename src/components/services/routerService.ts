import firebase from '../../firebase'

const db = firebase.ref("/tasks");

class TaskDataServices {
    getALl() {
        return db
    }

    create(task: any){
        return db.push(task)
    }

    delete(key: string) {
        return db.child(key).remove();
      }

      deleteAll() {
        return db.remove();
      }

      update(key: string, value: Object) {
        return db.child(key).update(value);
      } 

      getDataUsingID(key:string) {
        return db.child(key).get();
      }

     
}

export default new TaskDataServices