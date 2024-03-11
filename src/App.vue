<template>
    <div id="app">
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus=""
        autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodoRef"
        @keyup.enter="add"
      />
    </header>
    <section class="main" v-show="todosRef.length > 0">
      <input id="toggle-all" class="toggle-all" type="checkbox" :checked="allDOne"  @input="allSet($event.target.checked)"/>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li class="todo" :class="{completed: item.completed,editing:item == currentRef}" v-for="item in filterList" :key="item.id" @dblclick="clickEdit(item)">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.completed" />
            <label>{{ item.title }}</label>
            <button class="destroy" @click="remove(item)"></button>
          </div>
          <input class="edit" type="text" v-model="item.title" @keyup.enter="hasDoner(item)" @keyup.escape="cancelEdit(item)"/>
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todosRef.length > 0">
      <span class="todo-count">
        <strong>{{ notDone.length }}</strong>
        <span>item{{ notDone.length> 1? 's' : '' }} left</span>
      </span>
      <ul class="filters">
        <li><a href="#/all" :class="{selected : visibilityRef === 'all'}" >All</a></li>
        <li><a href="#/active" :class="{selected : visibilityRef === 'active'}">Active</a></li>
        <li><a href="#/completed" :class="{selected : visibilityRef === 'completed'}">Completed</a></li>
      </ul>
      <button class="clear-completed" v-show="hasDone.length" @click="removeAll">
        Clear completed
      </button>
    </footer>
  </section>
</div>
</template>

<script setup>
import useTodoList from './composition/useTodoList'
import useNewTodo from './composition/useNewTodo'
import useFilter from './composition/useFilter';
import useEdit from './composition/useEdit'
import useRemove from './composition/useRemove';
const {todosRef} = useTodoList()
const {newTodoRef,add} = useNewTodo(todosRef)
const {visibilityRef,filterList,notDone,hasDone} = useFilter(todosRef)
const {clickEdit,currentRef,hasDoner,cancelEdit,allDOne,allSet} = useEdit(todosRef)
const {remove,removeAll}  = useRemove(todosRef)
</script>
