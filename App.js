import React, {useState} from 'react';
import { Button,FlatList,StyleSheet, Text, TextInput, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';  

function App() {

  const[tasks,setTasks] = useState([
      {id:1, task:"Acheter une corde"},
      {id:2, task:"Acheter un Tabouret"},
      {id:3, task:"Rédiger une lettre d'Adieu et foutre personne dans l'héritage"},
      {id:4, task:"Executer la recette"}
  ])

function deleteTask() {
  let remainingTasks = task.filter(task => task.id !== id)
  setTasks(remainingTasks)
}

  addTask = () =>{
   let newTask = {
     task: this.state.task
   } 
   setTasks({
     tasks: [tasks,newTask]
   })
  }
  Submit = () => {
    this.state.addTask(this.state.task);
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todolist d'un suicidaire</Text>
      <TextInput style={styles.input}/><Button title="Ajouter" color='black'/>
      <Text style={styles.backTitle}> Tâches:</Text>
      <FlatList
          data={tasks}
          renderItem={({item}) => 
          <View style={styles.task}>
            <Text style={styles.text}>{item.task}</Text>
              <TouchableHighlight onPress={() => {deleteTask(item.id)}}>
                <AntDesign name="closecircle" size={24} color="white" />
              </TouchableHighlight>
          </View>}
          keyExtractor={item => item.id.toString()}
        />
    </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 35,
    marginBottom: 30,
    marginTop: 30,
  },
  backTitle:{
    fontSize: 25,
    marginBottom: 30,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 15,
    width: '90%'
  },
  task:{
    margin: 15,
    backgroundColor: 'black',
    padding : 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});

export default App;