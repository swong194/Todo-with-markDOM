$m(()=>{
  $m('.cover-container').on('click', () => {
    $m('.cover-container').addClass('cover-hide');
    $m('.todo-list').append(
      `<li class='todo-item'><span class='todo-task'>Make a todo app</span>
      <i class="fa fa-pencil" aria-hidden="true"></i>
      <i class="fa fa-check" aria-hidden="true"></i></li>
      <li class='todo-item'><span class='todo-task'>Become a software engineer</span>
      <i class="fa fa-pencil" aria-hidden="true"></i>
      <i class="fa fa-check" aria-hidden="true"></i></li>`
    );
    addDeleteToItems();
    addEditToItems();
  });

  $m('.todo-form').on('submit', (e)=>{
    e.preventDefault();
    addTodoItem();
  });

  $m('.todo-button').on('click', (e)=> {
    e.preventDefault();
    addTodoItem();
  })

  const addTodoItem = () => {
    if($m('.todo-input').val()){
      const todoValue = $m('.todo-input').val();
      const newTodo = $m('.todo-list').append(
        `<li class='todo-item'><span class='todo-task'>${todoValue}</span>
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <i class="fa fa-check" aria-hidden="true"></i></li>`
      );
      $m('.todo-input').val('');
      addDeleteToItems();
      addEditToItems();
    }
  }

  const addDeleteToItems = () => {
    $m('.fa-check').on('click', (e)=> {
      $m(e.target).parent().remove();
    });
  };

  const addSaveToEdit = () => {
    $m('.fa-paper-plane').on('click', e => {
      const todoValue = $m(e.target).parent().find('input').val();
      $m(e.target).parent().html(
        `<span class="todo-task">${todoValue}</span>
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <i class="fa fa-check" aria-hidden="true"></i>`
      );
      addDeleteToItems();
      addEditToItems();
    });
  };

  const addEditToItems = () => {
    $m('.fa-pencil').on('click', (e)=> {
      const todoValue = $m(e.target).parent().find('span').html();
      $m(e.target).parent().html(
        `<input class='edit-todo' placeholder='${todoValue}' value='${todoValue}'/>
        <i class="fa fa-paper-plane" aria-hidden="true"></i>`
      );
      addSaveToEdit();
    });
  }


});
